function floodFill(
  image: number[][],
  sr: number,
  sc: number,
  color: number
): number[][] {
  const oldColor = image[sr][sc];
  if (oldColor === color) {
    return image;
  }

  const dfs = (r: number, c: number) => {
    if (
      r < 0 ||
      r >= image.length ||
      c < 0 ||
      c >= image[0].length ||
      image[r][c] !== oldColor
    ) {
      return;
    }

    image[r][c] = color;

    dfs(r - 1, c);
    dfs(r + 1, c);
    dfs(r, c - 1);
    dfs(r, c + 1);
  };

  dfs(sr, sc);

  return image;
}

const image = [
  [1, 1, 1],
  [1, 1, 0],
  [1, 0, 1],
];
const sr = 1;
const sc = 1;
const color = 2;

console.log(floodFill(image, sr, sc, color));
