export default function(condition, fn) {
  if (condition) {
    return fn;
  }

  function skipped(cb) {
    cb();
  }

  const taskDisplayName = typeof fn === 'string' ? fn : fn.name || fn.displayName;

  skipped.displayName = `${taskDisplayName} (skipped)`;
  return skipped;
}
