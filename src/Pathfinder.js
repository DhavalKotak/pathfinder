const openList = []

export const startNode = (x,y,grid) => {
    let newNodes = grid.map(node => {
        if(node.start && (node.x !== x || node.y !== y))
            node.start = false
        if(node.x === x && node.y === y){
            node.start = !node.start
            if(node.end)
                node.end = false
            if(node.isClosed)
                node.isClosed = false
        }            
        return node
    })
    return newNodes
}

export const endNode = (x,y,grid) => {
    let newNodes = grid.map(node => {
        if(node.end && (node.x !== x || node.y !== y))
            node.end = false
        if(node.x === x && node.y === y){
            node.end = !node.end
            if(node.isClosed)
                node.isClosed = false
            if(node.start)
                node.start = false
        }
        return node
    })
    return newNodes
}

export const blockNode = (x,y,grid) => {
    let newNodes = grid.map(node => {
        if(node.x === x && node.y === y){
            node.isClosed = !node.isClosed
            if(node.end)
                node.end = false
            if(node.start)
                node.start = false
        }
        return node
    })
    return newNodes
}

export const addToOpenList = node => {
    node.isOpen = true
    openList.push(node)
}

export const closeNode = node => {
    node.seen = true
    node.isOpen = false
    node.isClosed = true
}

export const findDistance = (endNode,node) => {
    let x = Math.abs(endNode.x - node.x)
    let y = Math.abs(endNode.y - node.y)
    return (x+y)*10
}

export const fCost = node => {
    return node.gCost + node.hCost
}

export const getLowestFCost = () => {
    let lowestNode = false
    openList.forEach(node => {
        if(node.isOpen){
            if(!lowestNode){
                lowestNode = node
            }else if(fCost(node) < fCost(lowestNode)){
                lowestNode = node
            }else if(fCost(node) === fCost(lowestNode)){
                if(node.hCost <= lowestNode.hCost)
                    lowestNode = node
            }
        }
    })
    return lowestNode
}

export const findNeighbourNodes = (grid,node) => {
    let neighbourNodes = []
    let neighbour
    for(let i = -1; i<=1;i++){
        for(let j = -1; j<=1;j++){
            if(!(i === 0 && j === 0)){
                if(i===-1)
                    neighbour = grid.find(item => node.id+j-10 === item.id)
                else if(i===0)
                    neighbour = grid.find(item => node.id+j === item.id)
                else if(i===1)
                    neighbour = grid.find(item => node.id+10+j === item.id)
            }
            if(neighbour){
                if(neighbour.x >=0 && neighbour.y >=0 && neighbour.x < 11 && neighbour.y < 11){
                    if(!(i === 0 && j === 0)){        
                        if(!neighbour.isClosed){
                            neighbourNodes.push(neighbour)
                        }
                    }
                }
            }
        }
    }
    return neighbourNodes
}

export const Pathfind = grid => {
    let currentNode
    let maxLoops = 100
    let path = []
    const startNode = grid.find(node => node.start === true)
    const endNode = grid.find(node => node.end === true)
    startNode.gCost = 0
    startNode.hCost = findDistance(endNode,startNode)

    currentNode = startNode
    do{
        let neighbours = findNeighbourNodes(grid,currentNode)
        neighbours.forEach(neighbour => {
            if(neighbour.isOpen){
                if(neighbour.gCost > (currentNode.gCost +(findDistance(currentNode,neighbour)*10))){
                    neighbour.gCost = currentNode.gCost + (findDistance(currentNode,neighbour)*10)
                    neighbour.parent = currentNode
                    
                }
            }else{
                addToOpenList(neighbour)
                neighbour.hCost = findDistance(neighbour,endNode)*10
                neighbour.gCost = findDistance(neighbour,currentNode)*14
                neighbour.parent = currentNode
                neighbour.openListIndex = openList.length
                openList.push(neighbour)
            }
        })

        closeNode(currentNode)
        openList.splice(currentNode.openListIndex,1)

        currentNode = getLowestFCost()

        if(currentNode === endNode){
            while(currentNode.parent){
                path.push(currentNode)
                currentNode.path = true
                currentNode = currentNode.parent
            }
            path.push(currentNode)
            currentNode.path = true
            console.log(openList)
            return path
        }

        maxLoops--

    }while(currentNode && maxLoops !== 0)
    
    return path
}