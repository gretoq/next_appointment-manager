export const getSeparatedTrimmedData = (data: string): string[][] => {
  return data
    .split('\n')
    .map(dataInfo => dataInfo.split(','))
    .map(dataInfo => {
      return dataInfo.flatMap(info => {
        const trimmedInfo = info.trim();

        if (!trimmedInfo) {
          return [];
        }

        return [trimmedInfo];
      });
    })
    .filter(dataInfo => dataInfo.length > 0);
};
