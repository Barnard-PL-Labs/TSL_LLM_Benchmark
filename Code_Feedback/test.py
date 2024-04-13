
def colorTheArray(n: int, queries: List[List[int]]) -> List[int]:
    colors = [0] * n
    ans = []
    res = 0
    for i, c in queries:
        if i and colors[i] == colors[i-1] and colors[i] > 0: res -= 1
        if i < n - 1 and colors[i] == colors[i+1] and colors[i] > 0: res -= 1
        colors[i] = c
        if i and colors[i] == colors[i-1] and colors[i] > 0: res += 1
        if i < n - 1 and colors[i] == colors[i+1] and colors[i] > 0: res += 1
        ans.append(res)
    return ans

