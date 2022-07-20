import semver from "semver";
export const shouldUpdate = (currentVersion: string, targetVersion: string) => {
  const pureVersion = currentVersion.replace(/^(\^|\~)/g, "");
  const isValid = semver.valid(pureVersion);
  console.log(pureVersion, targetVersion, isValid);
  if (isValid) {
    
    if (pureVersion === targetVersion) {
      return "gray";
    } else if (semver.gt(targetVersion, pureVersion)) {
      return "success";
    } else {
      return "warning";
    }
  } else {
    return "error";
  }
};
