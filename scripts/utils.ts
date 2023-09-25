import consola from 'consola';
import process from 'process';
import { resolve } from 'path';
import { findWorkspacePackages } from '@pnpm/find-workspace-packages';

export function errorAndExit(err: Error): never {
  consola.error(err);
  process.exit(1);
}

export const getWorkspacePackages = () => findWorkspacePackages(resolve(__dirname, '../packages'));
