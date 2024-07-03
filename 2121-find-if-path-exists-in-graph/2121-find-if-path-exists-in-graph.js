/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function (n, edges, source, destination) {
    const visited = new Set();
    const graph = {};

    // Build the graph
    for (const [u, v] of edges) {
        if (!graph[u]) graph[u] = [];
        if (!graph[v]) graph[v] = [];
        graph[u].push(v);
        graph[v].push(u); // For bi-directional graph
    }

    const dfs = (node, visited) => {
        if (node === destination) return true;
        if (visited.has(node)) return false; // Prevent revisiting

        visited.add(node);

        for (const neighbor of graph[node] || []) {
            if (dfs(neighbor, visited)) {
                return true;
            }
        }

        return false;
    };

    return dfs(source, visited);
};