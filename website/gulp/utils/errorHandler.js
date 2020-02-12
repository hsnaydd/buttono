import notifier from './notifier';
import { errorLoger, traceLoger } from './logger';

export default function errorHandler(error) {
  notifier({ message: error.message, type: 'error' });

  errorLoger.log(`\nError ${error.plugin ? `in plugin "${error.plugin}"` : ':'}`);
  traceLoger.log(`Message: ${error.message}\n`);

  if (!process.env.WATCHING) {
    process.exit(1);
  }

  if (this && this.emit) {
    this.emit('end');
  }
}
