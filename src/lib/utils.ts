/**
 * Get the correct asset path for GitHub Pages deployment
 * In production, adds the basePath prefix, in development returns the path as-is
 */
export function getAssetPath(path: string): string {
  const basePath = process.env.NODE_ENV === 'production' ? '/Genesis' : '';
  return `${basePath}${path}`;
}
