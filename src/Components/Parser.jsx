import React from "react";
import {Image} from "react-bootstrap"
import A from "../Signs/a.png"
import B from "../Signs/b.png"
import C from "../Signs/c.png"
import D from "../Signs/d.png"
import E from "../Signs/e.png"
import F from "../Signs/f.png"
import G from "../Signs/g.png"
import H from "../Signs/h.png"
import I from "../Signs/i.png"
import J from "../Signs/j.png"
import K from "../Signs/k.png"
import L from "../Signs/l.png"
import M from "../Signs/m.png"
import N from "../Signs/n.png"
import O from "../Signs/o.png"
import P from "../Signs/p.png"
import Q from "../Signs/q.png"
import R from "../Signs/r.png"
import S from "../Signs/s.png"
import T from "../Signs/t.png"
import U from "../Signs/u.png"
import V from "../Signs/v.png"
import W from "../Signs/w.png"
import X from "../Signs/x.png"
import Y from "../Signs/y.png"
import Z from "../Signs/z.png"
import Space from "../Signs/Space.png"
import "../styles/Images.css"

const Piece = ({character, type}) => {
    const piece = "piece" + type;

    if(character === "a" || character === "A")
        return (<Image src={A} className = {`${piece}`}/>)
    else if(character === "b" || character === "B")
        return (<Image src={B} className = {`${piece}`}/>)
    else if(character === "c" || character === "C")
        return (<Image src={C} className = {`${piece}`}/>)
    else if(character === "d" || character === "D")
        return (<Image src={D} className = {`${piece}`}/>)
    else if(character === "e" || character === "e")
        return (<Image src={E} className = {`${piece}`}/>)
    else if(character === "f" || character === "F")
        return (<Image src={F} className = {`${piece}`}/>)
    else if(character === "g" || character === "G")
        return (<Image src={G} className = {`${piece}`}/>)
    else if(character === "h" || character === "H")
        return (<Image src={H} className = {`${piece}`}/>)
    else if(character === "i" || character === "I")
        return (<Image src={I} className = {`${piece}`}/>)
    else if(character === "j" || character === "J")
        return (<Image src={J} className = {`${piece}`}/>)
    else if(character === "k" || character === "K")
        return (<Image src={K} className = {`${piece}`}/>)
    else if(character === "l" || character === "L")
        return (<Image src={L} className = {`${piece}`}/>)
    else if(character === "m" || character === "M")
        return (<Image src={M} className = {`${piece}`}/>)
    else if(character === "n" || character === "N")
        return (<Image src={N} className = {`${piece}`}/>)
    else if(character === "o" || character === "O")
        return (<Image src={O} className = {`${piece}`}/>)
    else if(character === "p" || character === "P")
        return (<Image src={P} className = {`${piece}`}/>)
    else if(character === "q" || character === "Q")
        return (<Image src={Q} className = {`${piece}`}/>)
    else if(character === "r" || character === "R")
        return (<Image src={R} className = {`${piece}`}/>)
    else if(character === "s" || character === "S")
        return (<Image src={S} className = {`${piece}`}/>)
    else if(character === "T" || character === "T")
        return (<Image src={T} className = {`${piece}`}/>)
    else if(character === "u" || character === "U")
        return (<Image src={U} className = {`${piece}`}/>)
    else if(character === "v" || character === "V")
        return (<Image src={V} className = {`${piece}`}/>)
    else if(character === "w" || character === "W")
        return (<Image src={W} className = {`${piece}`}/>)
    else if(character === "x" || character === "X")
        return (<Image src={X} className = {`${piece}`}/>)
    else if(character === "y" || character === "Y")
        return (<Image src={Y} className = {`${piece}`}/>)
    else if(character === "z" || character === "Z")
        return (<Image src={Z} className = {`${piece}`}/>)
    else if(character === " " )
        return (<Image src={Space} className = {`${piece}`}/>)
    else return <></>
}

const Parser = ({description, type}) => {
    const length = description.length;
    const pieces = [...Array(length)]
    return (
        <>
            {
                pieces.map((props, i) => (
                    <Piece type = {type} key={i} character = {description[i]} />
                ))
            }
        </>  
    );
};
export default Parser;