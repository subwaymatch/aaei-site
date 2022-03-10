export function getChallengeIdAsNumberFromQuery(
  cid: string | string[]
): number {
  let challengeId = cid
    ? Array.isArray(cid)
      ? Number(cid[0])
      : Number(cid)
    : null;

  return challengeId;
}

export function getChallengeTypeDisplayName(challengeTypeStr: string) {
  const challengeStringMap = {
    "python-challenge": "Python",
    "multiple-choice": "MCQ",
  };

  return challengeStringMap.hasOwnProperty(challengeTypeStr)
    ? challengeStringMap[challengeTypeStr]
    : "Unknown";
}
