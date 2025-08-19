export enum Status {
  INPROGRESS = 'In Progress',
  COMPLETED = 'Completed',
  CANCELLED = 'Cancelled'
}

export interface Todo {
  id: number;
  title: string;
  status: Status;
  description: string;
  date: string;
  location: string;
}

export type TodoFormData = Omit<Todo,'id' | 'status'>;
