import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createComment, deleteComment } from '../lib/api';

export const useCreateComment = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createComment,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['product'] });
    },
  });
};

export const useDeleteComment = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteComment,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['product'] });
    },
  });
};
