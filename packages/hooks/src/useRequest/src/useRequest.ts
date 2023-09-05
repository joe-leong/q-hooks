import type { Options, Plugin, Service } from './types';
import useRequestImplement from './useRequestImplement';

export default function useRequest<TData, TParams extends any[]>(
  service: Service<TData, TParams>,
  options?: Options<TData, TParams>,
  plugins?: Plugin<TData, TParams>[],
) {
  return useRequestImplement(service, options, [...(plugins || [])] as Plugin<TData, TParams>[]);
}
