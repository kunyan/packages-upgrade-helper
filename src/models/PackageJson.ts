export type Dependency = Partial<Record<string, string>>;

export interface IPackageJson {
  name?: string;
  version?: string;
  description?: string;
  keywords?: string[];
  license?: string;
  dependencies?: Dependency;
  devDependencies?: Dependency;
  optionalDependencies?: Dependency;
  peerDependencies?: Dependency;
}
