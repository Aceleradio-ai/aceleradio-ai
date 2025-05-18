import { io, Socket } from 'socket.io-client';

interface CarData {
  currentDriverLevel: number;
}

export class WebSocketService {
  private socket: Socket | null = null;
  private reconnectAttempts = 0;
  private maxReconnectAttempts = 5;
  private reconnectTimeout = 3000;
  private eventHandlers: Map<string, ((data: any) => void)[]> = new Map();

  constructor(private url: string) {}

  connect() {
    try {
      this.socket = io(this.url, {
        reconnection: true,
        reconnectionAttempts: this.maxReconnectAttempts,
        reconnectionDelay: this.reconnectTimeout,
        transports: ['websocket'],
      });

      this.socket.on('connect', () => {
        console.log('Socket.IO Connected');
        this.reconnectAttempts = 0;
      });

      this.socket.on('disconnect', () => {
        console.log('Socket.IO Disconnected');
      });

      this.socket.on('error', (error) => {
        console.error('Socket.IO Error:', error);
      });

      this.socket.on('carData', (data: CarData) => {
        try {
          console.log('Received car data:', data);
          this.handleMessage(data);

          const handlers = this.eventHandlers.get('carData') || [];
          handlers.forEach(handler => handler(data.currentDriverLevel));
        } catch (error) {
          console.error('Error handling car data:', error);
        }
      });
    } catch (error) {
      console.error('Error connecting to Socket.IO:', error);
    }
  }

  on(event: string, handler: (data: any) => void) {
    const handlers = this.eventHandlers.get(event) || [];
    handlers.push(handler);
    this.eventHandlers.set(event, handlers);
  }

  private handleMessage(data: CarData) {
    console.log('Received message:', data);
  }

  sendMessage(message: any) {
    if (this.socket?.connected) {
      this.socket.emit('message', message);
    }
  }

  disconnect() {
    if (this.socket) {
      this.socket.disconnect();
      this.socket = null;
    }
  }
} 