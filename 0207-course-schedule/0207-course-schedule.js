/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    // Create an array to store the in-degrees of each course
    let inDegree = new Array(numCourses).fill(0);
    // adjacency list to store the graph
    let adjList = new Map();
    
    // Build the graph
    for (let [course, pre] of prerequisites) {
        if (!adjList.has(pre)) {
            adjList.set(pre, []);
        }
        adjList.get(pre).push(course);
        inDegree[course]++;
    }
    
    // Initialize a queue and add all courses with in-degree 0
    let queue = [];
    for (let i = 0; i < numCourses; i++) {
        if (inDegree[i] === 0) {
            queue.push(i);
        }
    }
    
    // Process the courses with in-degree 0
    let count = 0;
    while (queue.length > 0) {
        let current = queue.shift();
        count++;
        
        if (adjList.has(current)) {
            for (let neighbor of adjList.get(current)) {
                inDegree[neighbor]--;
                if (inDegree[neighbor] === 0) {
                    queue.push(neighbor);
                }
            }
        }
    }
    
    // If count equals numCourses, then all courses can be finished
    return count === numCourses;
};