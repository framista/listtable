import { v4 as uuidv4 } from 'uuid';

const initialState = [
  {
    id: uuidv4(),
    name: 'Take out the trash',
    priority: 'Medium',
    done: false,
  },
  {
    id: uuidv4(),
    name: 'Feed the dog',
    priority: 'High',
    done: true,
  },
  {
    id: uuidv4(),
    name: 'Order lunch',
    priority: 'Low',
    done: false,
  },
];

export default initialState;
