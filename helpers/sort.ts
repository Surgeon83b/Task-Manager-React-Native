import { SortDirection, SortOption, Status, Todo } from '@/types';

export const sortTodos = (
  todos: Todo[],
  sortBy: SortOption,
  direction: SortDirection
): Todo[] => {
  if (sortBy === 'default') return todos;

  const sorted = [...todos].sort((a, b) => {
    switch (sortBy) {
      case 'date':
        const parseDate = (dateStr: string) => {
          const [year, month, day] = dateStr.split('-').map(Number);
          console.log(new Date(year, month - 1, day));
          return new Date(year, month - 1, day).getTime();
        };
        return parseDate(a.date) - parseDate(b.date); 
     // return new Date(a.date).getTime() - new Date(b.date).getTime();
      case 'status':
        const statusOrder = {
          [Status.INPROGRESS]: 0,
          [Status.COMPLETED]: 1,
          [Status.CANCELLED]: 2,
        };
        return statusOrder[a.status] - statusOrder[b.status];
      default:
        return 0;
    }
  });

  return direction === 'asc' ? sorted : sorted.reverse();
};
