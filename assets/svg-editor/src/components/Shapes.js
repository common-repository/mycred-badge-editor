import React from 'react';
import './Shapes.scss';

import { fabric } from 'fabric';

import __ from './../utils/translation';

import { ReactComponent as Shape01 } from './../shapes/01-rectangle.svg';
import { ReactComponent as Shape02 } from './../shapes/02-diamond.svg';
import { ReactComponent as Shape03 } from './../shapes/03-rectangle-dist.svg';
import { ReactComponent as Shape04 } from './../shapes/04-trapeze.svg';
import { ReactComponent as Shape05 } from './../shapes/05-frame.svg';

import { ReactComponent as Shape06 } from './../shapes/06-5-angle.svg';
import { ReactComponent as Shape07 } from './../shapes/07-6-angle.svg';
import { ReactComponent as Shape08 } from './../shapes/08-8-angle.svg';
import { ReactComponent as Shape09 } from './../shapes/09-5-angle-half.svg';
import { ReactComponent as Shape10 } from './../shapes/10-6-angle-half.svg';

import { ReactComponent as Shape11 } from './../shapes/11-triangle-even.svg';
import { ReactComponent as Shape12 } from './../shapes/12-triangle-odd.svg';
import { ReactComponent as Shape13 } from './../shapes/13-triangle-frame-even.svg';
import { ReactComponent as Shape14 } from './../shapes/14-triangle-frame-odd.svg';
import { ReactComponent as Shape15 } from './../shapes/15-circle.svg';

import { ReactComponent as Shape16 } from './../shapes/16-half-circle.svg';
import { ReactComponent as Shape17 } from './../shapes/17-half-pushed-circle.svg';
import { ReactComponent as Shape18 } from './../shapes/18-pushed-circle.svg';
import { ReactComponent as Shape19 } from './../shapes/19-circle-frame.svg';
import { ReactComponent as Shape20 } from './../shapes/20-half-circle-frame.svg';

import { ReactComponent as Shape21 } from './../shapes/21-star-4.svg';
import { ReactComponent as Shape22 } from './../shapes/22-star-5.svg';
import { ReactComponent as Shape23 } from './../shapes/23-star-12.svg';
import { ReactComponent as Shape24 } from './../shapes/24-star-24a.svg';
import { ReactComponent as Shape25 } from './../shapes/25-star-24b.svg';

import { ReactComponent as Shape26 } from './../shapes/26-arrow.svg';
import { ReactComponent as Shape27 } from './../shapes/27-arrow-2-way.svg';
import { ReactComponent as Shape28 } from './../shapes/28-arrow-2-way-turn.svg';
import { ReactComponent as Shape29 } from './../shapes/29-arrow-3-way.svg';
import { ReactComponent as Shape30 } from './../shapes/30-arrow-4-way.svg';

import { ReactComponent as Shape31 } from './../shapes/31-arrow-turn.svg';
import { ReactComponent as Shape32 } from './../shapes/32-arrow-turn-full.svg';
import { ReactComponent as Shape33 } from './../shapes/33-chat-rect.svg';
import { ReactComponent as Shape34 } from './../shapes/34-chat-circle.svg';
import { ReactComponent as Shape35 } from './../shapes/35-chat-thought.svg';

import { ReactComponent as Shape36 } from './../shapes/36-shape.svg';
import { ReactComponent as Shape37 } from './../shapes/37-shape.svg';
import { ReactComponent as Shape38 } from './../shapes/38-shape.svg';
import { ReactComponent as Shape39 } from './../shapes/39-shape.svg';
import { ReactComponent as Shape40 } from './../shapes/40-shape.svg';
import { ReactComponent as Shape41 } from './../shapes/41-shape.svg';
import { ReactComponent as Shape42 } from './../shapes/42-shape.svg';
import { ReactComponent as Shape43 } from './../shapes/43-shape.svg';
import { ReactComponent as Shape44 } from './../shapes/44-shape.svg';
import { ReactComponent as Shape45 } from './../shapes/45-shape.svg';
import { ReactComponent as Shape46 } from './../shapes/46-shape.svg';
import { ReactComponent as Shape47 } from './../shapes/47-shape.svg';
import { ReactComponent as Shape48 } from './../shapes/48-shape.svg';
import { ReactComponent as Shape49 } from './../shapes/49-shape.svg';
import { ReactComponent as Shape50 } from './../shapes/50-shape.svg';
import { ReactComponent as Shape51 } from './../shapes/51-shape.svg';
import { ReactComponent as Shape52 } from './../shapes/52-shape.svg';
import { ReactComponent as Shape53 } from './../shapes/53-shape.svg';
import { ReactComponent as Shape54 } from './../shapes/54-shape.svg';
import { ReactComponent as Shape55 } from './../shapes/55-shape.svg';
import { ReactComponent as Shape56 } from './../shapes/56-shape.svg';
import { ReactComponent as Shape57 } from './../shapes/57-shape.svg';
import { ReactComponent as Shape58 } from './../shapes/58-shape.svg';
import { ReactComponent as Shape59 } from './../shapes/59-shape.svg';
import { ReactComponent as Shape60 } from './../shapes/60-shape.svg';
import { ReactComponent as Shape61 } from './../shapes/61-shape.svg';
import { ReactComponent as Shape62 } from './../shapes/62-shape.svg';
import { ReactComponent as Shape63 } from './../shapes/63-shape.svg';
import { ReactComponent as Shape64 } from './../shapes/64-shape.svg';
import { ReactComponent as Shape65 } from './../shapes/65-shape.svg';
import { ReactComponent as Shape66 } from './../shapes/66-shape.svg';
import { ReactComponent as Shape67 } from './../shapes/67-shape.svg';
import { ReactComponent as Shape68 } from './../shapes/68-shape.svg';
import { ReactComponent as Shape69 } from './../shapes/69-shape.svg';
import { ReactComponent as Shape70 } from './../shapes/70-shape.svg';
import { ReactComponent as Shape71 } from './../shapes/71-shape.svg';
import { ReactComponent as Shape72 } from './../shapes/72-shape.svg';
import { ReactComponent as Shape73 } from './../shapes/73-shape.svg';
import { ReactComponent as Shape74 } from './../shapes/74-shape.svg';
import { ReactComponent as Shape75 } from './../shapes/75-shape.svg';
import { ReactComponent as Shape76 } from './../shapes/76-shape.svg';
import { ReactComponent as Shape77 } from './../shapes/77-shape.svg';
import { ReactComponent as Shape78 } from './../shapes/78-shape.svg';
import { ReactComponent as Shape79 } from './../shapes/79-shape.svg';
import { ReactComponent as Shape80 } from './../shapes/80-shape.svg';
import { ReactComponent as Shape81 } from './../shapes/81-shape.svg';
import { ReactComponent as Shape82 } from './../shapes/82-shape.svg';
import { ReactComponent as Shape83 } from './../shapes/83-shape.svg';
import { ReactComponent as Shape84 } from './../shapes/84-shape.svg';
import { ReactComponent as Shape85 } from './../shapes/85-shape.svg';
import { ReactComponent as Shape86 } from './../shapes/86-shape.svg';
import { ReactComponent as Shape87 } from './../shapes/87-shape.svg';
import { ReactComponent as Shape88 } from './../shapes/88-shape.svg';
import { ReactComponent as Shape89 } from './../shapes/89-shape.svg';
import { ReactComponent as Shape90 } from './../shapes/90-shape.svg';
import { ReactComponent as Shape91 } from './../shapes/91-shape.svg';
import { ReactComponent as Shape92 } from './../shapes/92-shape.svg';
import { ReactComponent as Shape93 } from './../shapes/93-shape.svg';
import { ReactComponent as Shape94 } from './../shapes/94-shape.svg';
import { ReactComponent as Shape95 } from './../shapes/95-shape.svg';
import { ReactComponent as Shape96 } from './../shapes/96-shape.svg';
import { ReactComponent as Shape97 } from './../shapes/97-shape.svg';
import { ReactComponent as Shape98 } from './../shapes/98-shape.svg';
import { ReactComponent as Shape99 } from './../shapes/99-shape.svg';
import { ReactComponent as Shape100 } from './../shapes/100-shape.svg';
import { ReactComponent as Shape101 } from './../shapes/101-shape.svg';
import { ReactComponent as Shape102 } from './../shapes/102-shape.svg';
import { ReactComponent as Shape103 } from './../shapes/103-shape.svg';
import { ReactComponent as Shape104 } from './../shapes/104-shape.svg';
import { ReactComponent as Shape105 } from './../shapes/105-shape.svg';
import { ReactComponent as Shape106 } from './../shapes/106-shape.svg';
import { ReactComponent as Shape107 } from './../shapes/107-shape.svg';
import { ReactComponent as Shape108 } from './../shapes/108-shape.svg';
import { ReactComponent as Shape109 } from './../shapes/109-shape.svg';
import { ReactComponent as Shape110 } from './../shapes/110-shape.svg';
import { ReactComponent as Shape111 } from './../shapes/111-shape.svg';
import { ReactComponent as Shape112 } from './../shapes/112-shape.svg';
import { ReactComponent as Shape113 } from './../shapes/113-shape.svg';
import { ReactComponent as Shape114 } from './../shapes/114-shape.svg';
import { ReactComponent as Shape115 } from './../shapes/115-shape.svg';
import { ReactComponent as Shape116 } from './../shapes/116-shape.svg';
import { ReactComponent as Shape117 } from './../shapes/117-shape.svg';
import { ReactComponent as Shape118 } from './../shapes/118-shape.svg';
import { ReactComponent as Shape119 } from './../shapes/119-shape.svg';
import { ReactComponent as Shape120 } from './../shapes/120-shape.svg';
import { ReactComponent as Shape121 } from './../shapes/121-shape.svg';
import { ReactComponent as Shape122 } from './../shapes/122-shape.svg';
import { ReactComponent as Shape123 } from './../shapes/123-shape.svg';
import { ReactComponent as Shape124 } from './../shapes/124-shape.svg';
import { ReactComponent as Shape125 } from './../shapes/125-shape.svg';
import { ReactComponent as Shape126 } from './../shapes/126-shape.svg';
import { ReactComponent as Shape127 } from './../shapes/127-shape.svg';
import { ReactComponent as Shape128 } from './../shapes/128-shape.svg';
import { ReactComponent as Shape129 } from './../shapes/129-shape.svg';
import { ReactComponent as Shape130 } from './../shapes/130-shape.svg';
import { ReactComponent as Shape131 } from './../shapes/131-shape.svg';
import { ReactComponent as Shape132 } from './../shapes/132-shape.svg';
import { ReactComponent as Shape133 } from './../shapes/133-shape.svg';
import { ReactComponent as Shape134 } from './../shapes/134-shape.svg';
import { ReactComponent as Shape135 } from './../shapes/135-shape.svg';
import { ReactComponent as Shape136 } from './../shapes/136-shape.svg';
import { ReactComponent as Shape137 } from './../shapes/137-shape.svg';
import { ReactComponent as Shape138 } from './../shapes/138-shape.svg';
import { ReactComponent as Shape139 } from './../shapes/139-shape.svg';
import { ReactComponent as Shape140 } from './../shapes/140-shape.svg';
import { ReactComponent as Shape141 } from './../shapes/141-shape.svg';
import { ReactComponent as Shape142 } from './../shapes/142-shape.svg';
import { ReactComponent as Shape143 } from './../shapes/143-shape.svg';
import { ReactComponent as Shape144 } from './../shapes/144-shape.svg';
import { ReactComponent as Shape145 } from './../shapes/145-shape.svg';
import { ReactComponent as Shape146 } from './../shapes/146-shape.svg';
import { ReactComponent as Shape147 } from './../shapes/147-shape.svg';
import { ReactComponent as Shape148 } from './../shapes/148-shape.svg';
import { ReactComponent as Shape149 } from './../shapes/149-shape.svg';
import { ReactComponent as Shape150 } from './../shapes/150-shape.svg';
import { ReactComponent as Shape151 } from './../shapes/151-shape.svg';
import { ReactComponent as Shape152 } from './../shapes/152-shape.svg';
import { ReactComponent as Shape153 } from './../shapes/153-shape.svg';
import { ReactComponent as Shape154 } from './../shapes/154-shape.svg';
import { ReactComponent as Shape155 } from './../shapes/155-shape.svg';
import { ReactComponent as Shape156 } from './../shapes/156-shape.svg';
import { ReactComponent as Shape157 } from './../shapes/157-shape.svg';
import { ReactComponent as Shape158 } from './../shapes/158-shape.svg';
import { ReactComponent as Shape159 } from './../shapes/159-shape.svg';
import { ReactComponent as Shape160 } from './../shapes/160-shape.svg';
import { ReactComponent as Shape161 } from './../shapes/161-shape.svg';
import { ReactComponent as Shape162 } from './../shapes/162-shape.svg';
import { ReactComponent as Shape163 } from './../shapes/163-shape.svg';
import { ReactComponent as Shape164 } from './../shapes/164-shape.svg';
import { ReactComponent as Shape165 } from './../shapes/165-shape.svg';
import { ReactComponent as Shape166 } from './../shapes/166-shape.svg';
import { ReactComponent as Shape167 } from './../shapes/167-shape.svg';
import { ReactComponent as Shape168 } from './../shapes/168-shape.svg';
import { ReactComponent as Shape169 } from './../shapes/169-shape.svg';
import { ReactComponent as Shape170 } from './../shapes/170-shape.svg';
import { ReactComponent as Shape171 } from './../shapes/171-shape.svg';
import { ReactComponent as Shape172 } from './../shapes/172-shape.svg';
import { ReactComponent as Shape173 } from './../shapes/173-shape.svg';
import { ReactComponent as Shape174 } from './../shapes/174-shape.svg';
import { ReactComponent as Shape175 } from './../shapes/175-shape.svg';
import { ReactComponent as Shape176 } from './../shapes/176-shape.svg';
import { ReactComponent as Shape177 } from './../shapes/177-shape.svg';
import { ReactComponent as Shape178 } from './../shapes/178-shape.svg';
import { ReactComponent as Shape179 } from './../shapes/179-shape.svg';
import { ReactComponent as Shape180 } from './../shapes/180-shape.svg';
import { ReactComponent as Shape181 } from './../shapes/181-shape.svg';
import { ReactComponent as Shape182 } from './../shapes/182-shape.svg';
import { ReactComponent as Shape183 } from './../shapes/183-shape.svg';
import { ReactComponent as Shape184 } from './../shapes/184-shape.svg';
import { ReactComponent as Shape185 } from './../shapes/185-shape.svg';
import { ReactComponent as Shape186 } from './../shapes/186-shape.svg';
import { ReactComponent as Shape187 } from './../shapes/187-shape.svg';
import { ReactComponent as Shape188 } from './../shapes/188-shape.svg';
import { ReactComponent as Shape189 } from './../shapes/189-shape.svg';
import { ReactComponent as Shape190 } from './../shapes/190-shape.svg';
import { ReactComponent as Shape191 } from './../shapes/191-shape.svg';
import { ReactComponent as Shape192 } from './../shapes/192-shape.svg';
import { ReactComponent as Shape193 } from './../shapes/193-shape.svg';
import { ReactComponent as Shape194 } from './../shapes/194-shape.svg';
import { ReactComponent as Shape195 } from './../shapes/195-shape.svg';
import { ReactComponent as Shape196 } from './../shapes/196-shape.svg';
import { ReactComponent as Shape197 } from './../shapes/197-shape.svg';
import { ReactComponent as Shape198 } from './../shapes/198-shape.svg';
import { ReactComponent as Shape199 } from './../shapes/199-shape.svg';
import { ReactComponent as Shape200 } from './../shapes/200-shape.svg';
import { ReactComponent as Shape201 } from './../shapes/201-shape.svg';
import { ReactComponent as Shape202 } from './../shapes/202-shape.svg';
import { ReactComponent as Shape203 } from './../shapes/203-shape.svg';
import { ReactComponent as Shape204 } from './../shapes/204-shape.svg';
import { ReactComponent as Shape205 } from './../shapes/205-shape.svg';
import { ReactComponent as Shape206 } from './../shapes/206-shape.svg';
import { ReactComponent as Shape207 } from './../shapes/207-shape.svg';
import { ReactComponent as Shape208 } from './../shapes/208-shape.svg';
import { ReactComponent as Shape209 } from './../shapes/209-shape.svg';
import { ReactComponent as Shape210 } from './../shapes/210-shape.svg';
import { ReactComponent as Shape211 } from './../shapes/211-shape.svg';
import { ReactComponent as Shape212 } from './../shapes/212-shape.svg';
import { ReactComponent as Shape213 } from './../shapes/213-shape.svg';
import { ReactComponent as Shape214 } from './../shapes/214-shape.svg';
import { ReactComponent as Shape215 } from './../shapes/215-shape.svg';
import { ReactComponent as Shape216 } from './../shapes/216-shape.svg';
import { ReactComponent as Shape217 } from './../shapes/217-shape.svg';
import { ReactComponent as Shape218 } from './../shapes/218-shape.svg';
import { ReactComponent as Shape219 } from './../shapes/219-shape.svg';
import { ReactComponent as Shape220 } from './../shapes/220-shape.svg';
import { ReactComponent as Shape221 } from './../shapes/221-shape.svg';
import { ReactComponent as Shape222 } from './../shapes/222-shape.svg';
import { ReactComponent as Shape223 } from './../shapes/223-shape.svg';
import { ReactComponent as Shape224 } from './../shapes/224-shape.svg';
import { ReactComponent as Shape225 } from './../shapes/225-shape.svg';
import { ReactComponent as Shape226 } from './../shapes/226-shape.svg';
import { ReactComponent as Shape227 } from './../shapes/227-shape.svg';
import { ReactComponent as Shape228 } from './../shapes/228-shape.svg';
import { ReactComponent as Shape229 } from './../shapes/229-shape.svg';
import { ReactComponent as Shape230 } from './../shapes/230-shape.svg';
import { ReactComponent as Shape231 } from './../shapes/231-shape.svg';
import { ReactComponent as Shape232 } from './../shapes/232-shape.svg';
import { ReactComponent as Shape233 } from './../shapes/233-shape.svg';
import { ReactComponent as Shape234 } from './../shapes/234-shape.svg';
import { ReactComponent as Shape235 } from './../shapes/235-shape.svg';
import { ReactComponent as Shape236 } from './../shapes/236-shape.svg';
import { ReactComponent as Shape237 } from './../shapes/237-shape.svg';
import { ReactComponent as Shape238 } from './../shapes/238-shape.svg';

const Shapes = ({ canvas }) => {
  const handleShapeAdd = (e) => {
    fabric.loadSVGFromString(
      e.currentTarget.children[0].outerHTML,
      (objects, options) => {
        var obj = fabric.util.groupSVGElements(objects, options)
        obj.strokeUniform = true
        obj.strokeLineJoin = 'miter'
        obj.scaleToWidth(100)
        obj.scaleToHeight(100)
        obj.set({ left: 0, top: 0 })
        canvas.add(obj).renderAll()
        canvas.trigger('object:modified')
      }
    )
  }

  return (
    <>
      <p className="title">{__('SHAPES')}</p>

      <div className="shapes">
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape01 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape02 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape03 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape04 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape05 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape06 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape07 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape08 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape09 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape10 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape11 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape12 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape13 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape14 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape15 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape16 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape17 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape18 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape19 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape20 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape21 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape22 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape23 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape24 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape25 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape26 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape27 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape28 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape29 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape30 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape31 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape32 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape33 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape34 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape35 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape36 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape37 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape38 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape39 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape40 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape41 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape42 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape43 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape44 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape45 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape46 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape47 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape48 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape49 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape50 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape51 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape52 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape53 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape54 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape55 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape56 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape57 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape58 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape59 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape60 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape61 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape62 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape63 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape64 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape65 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape66 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape67 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape68 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape69 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape70 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape71 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape72 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape73 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape74 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape75 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape76 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape77 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape78 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape79 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape80 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape81 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape82 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape83 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape84 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape85 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape86 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape87 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape88 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape89 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape90 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape91 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape92 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape93 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape94 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape95 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape96 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape97 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape98 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape99 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape100 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape101 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape102 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape103 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape104 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape105 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape106 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape107 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape108 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape109 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape110 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape111 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape112 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape113 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape114 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape115 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape116 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape117 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape118 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape119 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape120 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape121 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape122 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape123 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape124 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape125 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape126 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape127 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape128 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape129 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape130 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape131 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape132 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape133 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape134 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape135 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape136 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape137 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape138 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape139 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape140 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape141 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape142 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape143 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape144 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape145 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape146 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape147 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape148 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape149 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape150 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape151 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape152 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape153 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape154 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape155 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape156 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape157 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape158 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape159 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape160 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape161 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape162 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape163 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape164 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape165 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape166 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape167 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape168 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape169 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape170 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape171 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape172 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape173 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape174 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape175 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape176 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape177 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape178 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape179 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape180 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape181 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape182 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape183 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape184 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape185 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape186 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape187 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape188 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape189 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape190 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape191 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape192 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape193 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape194 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape195 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape196 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape197 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape198 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape199 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape200 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape201 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape202 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape203 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape204 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape205 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape206 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape207 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape208 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape209 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape210 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape211 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape212 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape213 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape214 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape215 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape216 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape217 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape218 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape219 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape220 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape221 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape222 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape223 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape224 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape225 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape226 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape227 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape228 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape229 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape230 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape231 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape232 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape233 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape234 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape235 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape236 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape237 /></div>
        <div className="button" onClick={(e) => handleShapeAdd(e)}><Shape238 /></div>
      </div>
    </>
  )

}

export default Shapes

