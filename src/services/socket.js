import { io } from 'socket.io-client';
import { setMatches } from '../features/matches/matchesSlice';

export const setupSocket = (dispatch) => {
  const socket = io(process.env.REACT_APP_SOCKET_URL || 'http://localhost:4000');

  socket.on('matches', (data) => {
    dispatch(setMatches(data));
  });

  socket.on('connect_error', (error) => {
    console.error('Socket connection error:', error);
  });

  return socket;
};
