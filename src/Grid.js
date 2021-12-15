import React, { useRef,useState } from 'react'
import { Node } from './Node'
import { startNode, endNode, blockNode, Pathfind } from './Pathfinder'

const initialGrid = []
let id = 1
    for(let i = 9;i >= 0; i--){
        for(let j = 0;j <= 9; j++){
            initialGrid.push({
                id: id,
                x: j,
                y: i,
                gCost: 0,
                hCost: 0,
                parent: null,
                isOpen: false,
                isClosed: false,
                seen: false,
                start: false,
                end: false,
                openListIndex : 0,
                path: false
            })
            id++
        }
    }

export const Grid = () => {
    
    const gridRef = useRef()
    const map = []
    const [grid,setGrid] = useState(initialGrid)

    const changeNode = (e,right) => {
        const currentGrid = gridRef.current
        let x = Math.floor((e.clientX - currentGrid.offsetLeft)/(currentGrid.clientWidth/10))
        let y = Math.abs(Math.ceil((e.clientY - currentGrid.offsetTop - currentGrid.clientWidth)/(currentGrid.clientWidth/10)))
        if(e.button === 0 && right === 0){
            let newNodes = startNode(x,y,grid)
            setGrid(newNodes)
        }else if(e.button === 2 && right === 1){
            e.preventDefault()
            let newNodes = endNode(x,y,grid)
            setGrid(newNodes)
        }else if(e.button === 1 && right === 0){
            let newNodes = blockNode(x,y,grid)
            setGrid(newNodes)
        }
    }
    const start = () => {
        let path = Pathfind(grid)
        if(path.length === 0){
            alert("no path")
        }
        let newNodes = []
        grid.forEach(node => {
            let item = path.find(pathNode => pathNode.id === node.id)
            if(item)
                newNodes.push(item)
            else
                newNodes.push(node)
            item = false
        })
        setGrid(newNodes)
    }

    grid.forEach(node => {
        map.push(<Node key={node.id} x={node.x} y={node.y} start={node.start} end={node.end} close={node.isClosed} open={node.isOpen} path={node.path} seen={node.seen}/>)
    })
    
    return(
        <React.Fragment>
            <div className='grid' onMouseDown={e => changeNode(e,0)} onContextMenu={e => {changeNode(e,1)}} ref={gridRef}>
                {map}
            </div>
            <button className='btn-lg btn-primary' onClick={start} style={{marginTop:'30px'}}>Start</button>
        </React.Fragment>
    )
}