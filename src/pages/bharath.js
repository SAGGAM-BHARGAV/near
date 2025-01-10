import React, { useState } from "react";
import "./bharath.css";

const categories = {
  "మసాలా (Masala)": [
    { id: 1, name: "జీలకర (Cumin Seeds)", price: 5, image: "https://i.imgur.com/PqYquks.jpg" },
    { id: 2, name: "ఆవాలు (Mustard Seeds)", price: 5, image: "https://i.imgur.com/UjW6Fwb.jpg" },
    { id: 3, name: "మెంతులు (Fenugreek Seeds)", price: 5, image: "https://i.imgur.com/sxPmqJ5.jpg" },
    { id: 4, name: "మిరియాలు (Black Pepper)", price: 5, image: "https://i.imgur.com/2LksM0a.jpg" },
    { id: 5, name: "సొంటి (Dry Ginger)", price: 5, image: "https://i.imgur.com/i9mcQtl.jpg" },
    { id: 6, name: "నువ్వులు (Sesame Seeds)", price: 5, image: "https://i.imgur.com/bb3lGRh.jpg" },
    { id: 7, name: "సాజీరా (Caraway Seeds)", price: 5, image: "https://i.imgur.com/a2MYxHP.jpg" },
    { id: 8, name: "దాల్చిన చెక్క (Cinnamon)", price: 5, image: "https://i.imgur.com/AAKgk2S.jpg" },
    { id: 9, name: "బందపువ్వు (Stone Flower)", price: 5, image: "https://i.imgur.com/UBTuzIi.jpg" },
    { id: 10, name: "బిర్యానీ ఆకు (Bay Leaf)", price: 5, image: "https://i.imgur.com/IXaCKAh.jpg" },
    { id: 11, name: "యాలకులు (Cardamom)", price: 5, image: "https://i.imgur.com/hVr1J71.jpg" },
    { id: 12, name: "లవంగాలు (Cloves)", price: 5, image: "https://i.imgur.com/agqo4Vd.jpg" },
    { id: 13, name: "తినే సోడా (Baking Soda)", price: 5, image: "https://i.imgur.com/XytsydP.jpg" },
    { id: 14, name: "టెస్టింగ్ సాల్ట్ (Testing Salt)", price: 5, image: "https://i.imgur.com/f1NuR4I.jpg" },
    { id: 15, name: "నిమ్మ సాల్ట్ (Lemon Salt)", price: 5, image: "https://i.imgur.com/b9SzLIu.jpg" },
    { id: 16, name: "కసూరి మెత్తి (Kasoori Methi)", price: 5, image: "https://i.imgur.com/u8xa1Zj.jpg" },
    { id: 17, name: "స్టార్ అనీస్ (Star Anise)", price: 5, image: "https://i.imgur.com/VcOV6QL.jpg" },
    { id: 18, name: "ఎండు మిర్చి (Dry Red Chili)", price: 5, image: "https://i.imgur.com/2GWmfIN.jpg" },
    { id: 19, name: "సోపు (Soap)", price: 5, image: "https://i.imgur.com/98aC1Yt.jpg" },
    { id: 20, name: "ధనియాలు (Coriander Seeds)", price: 5, image: "https://i.imgur.com/DOr7lAp.jpg" },
    { id: 21, name: "ధనియ పౌడర్ (Coriander Powder)", price: 5, image: "https://i.imgur.com/F1aQcMn.jpg" },
    { id: 22, name: "కుడుక పౌడర్ (Coconut Powder)", price: 5, image: "https://i.imgur.com/N9moynW.jpg" },
    { id: 23, name: "కాసు ()", price: 5, image: "https://i.imgur.com/5IC2o0X.jpg" },
    { id: 24, name: "పసుపు (Turmeric)", price: 5, image: "https://i.imgur.com/XWFJxx5.jpg" },
    { id: 25, name: "కుంకుమ (Kumkum)", price: 5, image: "https://i.imgur.com/SagBUp8.jpg" },
    { id: 26, name: "బూక (Brown)", price: 5, image: "https://i.imgur.com/KCH2Gok.jpg" },
    { id: 27, name: "గులాలు (pink)", price: 5, image: "https://i.imgur.com/QETNX1K.jpg" },
    { id: 28, name: "వుడూ ()", price: 5, image: "https://i.imgur.com/q1BC2Ha.jpg" },
    { id: 29, name: "గుగ్గిలం (Frankincense)", price: 5, image: "https://i.imgur.com/Agn2C69.jpg" },
    { id: 30, name: "మహిషాద్రి ()", price: 5, image: "https://i.imgur.com/DwrQ0FD.jpg" },
    { id: 31, name: "బ్రష్లు (Brushes)", price: 15, image: "https://i.imgur.com/KAqYQxw.jpg" },
    { id: 32, name: "సేఫ్టీ పిన్స్ (Safety Pins)", price: 5, image: "https://i.imgur.com/98Ozm0d.jpg" },
    { id: 33, name: "రబ్బర్స్ (Rubber Bands)", price: 5, image: "https://i.imgur.com/OOSGlPo.jpg" },
    { id: 34, name: "పుట్టనాలు (Beads)", price: 5, image: "https://i.imgur.com/9740hUN.jpg" },
    { id: 35, name: "కడ చక్కెర (khadi Sugar)", price: 5, image: "https://i.imgur.com/Qy476Hf.jpg" },
    { id: 36, name: "గరం మసాలా (Garam Masala)", price: 5, image: "https://i.imgur.com/4chueiH.jpg" },
    { id: 37, name: "బిర్యాని మసాలా (Biryani Masala)", price: 5, image: "https://i.imgur.com/ebPl437.jpg" },
    { id: 38, name: "పోక వక్కలు (Areca Nut)", price: 10, image: "https://i.imgur.com/alF9PAy.jpg" },
    { id: 39, name: "కంకణాల దారం (Sacred Thread)", price: 12, image: "https://i.imgur.com/R7L7Goa.jpg" },
    { id: 40, name: "సబుదాన (Sago)", price: 10, image: "https://i.imgur.com/RUd8RW6.jpg" },
    { id: 41, name: "పర్ఫ్యూమర్లు (Perfumes)", price: 10, image: "https://i.imgur.com/6FFjM3Y.jpg" },
    { id: 42, name: "పర్ఫ్యూమర్లు (Perfumes)", price: 10, image: "https://i.imgur.com/eJY86UO.jpg" }, 
    { id: 43, name: "ఎండు పళ్ళు (dry fruits)", price: 5, image: "https://i.imgur.com/Rn7CQ1j.jpg" },
    { id: 44, name: "పసుపు,కుంకుమ (Turmeric,Kumkum)", price: 2, image: "https://i.imgur.com/7oLuOTV.jpg" },
    { id: 45, name: "హారతి కర్పూరం (swastik karpur)", price: 5, image: "https://i.imgur.com/9ELNVsm.jpg" },
    { id: 46, name: "వత్తులు (vattulu)", price: 5, image: "https://i.imgur.com/qeMgNx2.jpg" },
    { id: 47, name: "అగర్బత్తి (agarbatti)", price: 10, image: "https://i.imgur.com/yGBUqCr.jpg" },
    { id: 48, name: "ఓమ (oma)", price: 5, image: "https://i.imgur.com/9SVU3qg.jpg" },
      
  ],
  "పప్పులు (Pulses)": [
    { id: 49, name: "పెసర పప్పు (Green Gram)", image: "https://i.imgur.com/2ekjGSR.jpg" },
    { id: 50, name: "తొగరు పప్పు (Toor Dal)", image: "https://i.imgur.com/jyJJb5B.jpg" },
    { id: 51, name: "శనగ పప్పు (Bengal Gram)", image: "https://i.imgur.com/6MwJ08e.jpg" },
    { id: 52, name: "మినప పప్పు (Black Gram)", image: "https://i.imgur.com/hZqpfSA.jpg" },
    { id: 53, name: "పల్లీలు (Peanuts)", image: "https://i.imgur.com/L7ualzR.jpeg.jpg" },
    { id: 54, name: "పుట్నాలు (Roasted Gram)", price: 5, image: "https://i.imgur.com/9740hUN.png.jpg" },
  ],
  "పిండిపదార్థాలు (Flours)": [
    { id: 55, name: "గోధుమ పిండి (Wheat Flour)", image: "https://i.imgur.com/XL1EX7a.jpg" },
    { id: 56, name: "శనగ పిండి (Gram Flour)", image: "https://i.imgur.com/mo1YUcU.jpg" },
    { id: 57, name: "రాగి పిండి (Ragi Flour)", image: "https://i.imgur.com/qAGfpUZ.jpg" },
    { id: 58, name: "మైదా పిండి (Maida Flour)", image: "https://i.imgur.com/IGTPdEi.jpg" },
    { id: 59, name: "బియ్యపు పిండి (Rice Flour)", image: "https://i.imgur.com/IGTPdEi.jpg" },
  ],
  "ఇతర పదార్థాలు (Other Items)": [
    { id: 60, name: "చిన్న రవ్వ (Small Sooji)", image: "https://i.imgur.com/qgypflg.jpg" },
    { id: 61, name: "పెద్ద రవ్వ (Big Sooji)", image: "https://i.imgur.com/YqZpgQS.jpg" },
    { id: 62, name: "పేపర్ అటుకులు (Thin Flattened Rice)", image: "https://i.imgur.com/Y4bI4tD.jpg" },
    { id: 63, name: "అటుకులు (Flattened Rice)", image: "https://i.imgur.com/9AxI3hz.jpg" },
    { id: 64, name: "ఇడ్లీ రవ్వ (Idli Rava)", image: "https://i.imgur.com/qgypflg.jpg" },
    { id: 65, name: "చక్కెర (Sugar)", image: "https://i.imgur.com/Sj85EZI.jpg" },
    { id: 66, name: "కడ చక్కెర (Brown Sugar)", price: 5, image: "https://i.imgur.com/Qy476Hf.jpg" },
    { id: 67, name: "సన్న బియ్యం (rice)", image: "https://i.imgur.com/F44jGdw.jpg" },
    { id: 68, name: "నూనె 600ml(Cooking Oil)", price: 110, image: "https://i.imgur.com/fY6pkNe.jpg" },
    { id: 69, name: "ఉప్పు (Salt)", price: 10, image: "https://i.imgur.com/54wqYdI.jpg" },
    { id: 70, name: "పెద్ద ఉప్పు (Big Salt)", price: 15, image: "https://i.imgur.com/5nILqHU.jpg" },
    { id: 71, name: "ఎర్ర ఉప్పు (Red Salt)", price: 10, image: "https://i.imgur.com/AbZ2HV2.jpg" },
    { id: 72, name: "గుడ్లు (Eggs)",  image: "https://i.imgur.com/rIaDkQd.jpg" },
    { id: 73, name: "అగ్గిపెట్టె (Match Box)", price: 2, image: "https://i.imgur.com/0JpPIvv.jpg" },
    { id: 74, name: "కోల్డ్ రబ్ (Cold Rub)", price: 10, image: "https://i.imgur.com/yerAS17.jpg" },
    { id: 75, name: "మిలిమేకర్ (సోయా చిన్న చంక్స్) (Soya Mini Chunks)", price: 10, image: "https://i.imgur.com/89uFtKS.jpg" },
    { id: 76, name: "మిలిమేకర్ (సోయా పెద్ద చంక్స్) (Soya Big Chunks)", price: 10, image: "https://i.imgur.com/2QyC6DW.jpg" },
    { id: 77, name: "తిల్సోనా నూనె (Tilsona Oil)", price: 37, image: "https://i.imgur.com/N2CfwtY.jpg" },
    { id: 78, name: "లక్ష్మణరేఖ (Laxmanrekha)", price: 20, image: "https://i.imgur.com/OKf2EXv.jpg" },
    { id: 79, name: "బొరో ప్లస్ (Boro Plus)", price: 5, image: "https://i.imgur.com/WA82SPa.jpg" },
    { id: 80, name: "మిరాకిల్ టేప్ (Miracle Tape)", price: 15, image: "https://i.imgur.com/hm8nRha.jpg" },
    { id: 81, name: "క్లోజప్ (Closeup)", price: 10, image: "https://i.imgur.com/s40kVxt.jpg" },
    { id: 82, name: "కాల్గేట్ (Colgate)", price: 10, image: "https://i.imgur.com/LFvJx3E.jpg" },
    { id: 83, name: "కాల్గేట్ సాల్ట్ (Colgate Salt)", price: 10, image: "https://i.imgur.com/bG594GY.jpg" },
    { id: 84, name: "డాబర్ రెడ్ (Dabur Red)", price: 10, image: "https://i.imgur.com/fIfrPpa.jpg" },
    { id: 85, name: "బత్తి పోకలు (Cotton Wicks)", price: 10, image: "https://i.imgur.com/DUsK3qH.jpg" },
    { id: 86, name: "వక్క పోకలు (Dry Coconut Wicks)", price: 10, image: "https://i.imgur.com/DUsK3qH.jpg" },
    { id: 87, name: "స్క్రబ్బర్స్ (Scrubbers)", price: 10, image: "https://i.imgur.com/J76InS8.jpg" },
    { id: 88, name: "స్టీల్ స్క్రబ్బర్ (Steel Scrubber)", price: 10, image: "https://i.imgur.com/mdL2s38.jpg" },
    { id: 89, name: "అజయ్ బ్రష్ (Ajay Brush)", price: 22, image: "https://i.imgur.com/qyZnQbt.jpg" },
    { id: 90, name: "ఒరల్-బి బ్రష్ (Oral-B Brush)", price: 20, image: "https://i.imgur.com/4GBuzx6.jpg" },
    { id: 91, name: "చిన్న బ్రష్ (Small Brush)", price: 15, image: "https://i.imgur.com/KAqYQxw.jpg" },
    { id: 92, name: "విజయా బ్లేడ్స్ (Vijaya Blades)", price: 2, image: "https://i.imgur.com/8uu7iVt.jpg" },
    { id: 93, name: "లేజర్ బ్లేడ్స్ (Laser Blades)", price: 3, image: "https://i.imgur.com/MThc3kw.jpg" },
    { id: 94, name: "పాలు (Milk)", price: 10, image: "https://i.imgur.com/1uMWTO7.jpg" },
    { id: 95, name: "లైటర్స్ (Lighters)", price: 15, image: "https://i.imgur.com/2FzOPlS.jpg" },
    { id: 96, name: "చూనా (సున్నం) (Lime Powder)", price: 2, image: "https://i.imgur.com/0nWxQW2.jpg" },
    { id: 97, name: "అల్లం ప్యాకెట్లు (Ginger Packets)", price: 5, image: "https://i.imgur.com/UbpCVPQ.jpg" },
    { id: 98, name: "పలక (Slate)", price: 25, image: "https://i.imgur.com/odVA7JA.jpg" },
    { id: 99, name: "నవరత్న (Navaratna)", price: 1, image: "https://i.imgur.com/yLwbw5X.jpg" },
    { id: 100, name: "బెల్లం (Jaggery)", image: "https://i.imgur.com/f1NuR4I.jpg" },
    { id: 101, name: "ఫేవిక్విక్ (Fevikwik)", price: 5, image: "https://i.imgur.com/DLiu07e.jpg" },
    { id: 102, name: "బల్బ్ హోల్డర్స్ (Bulb Holders)", price: 10, image: "https://i.imgur.com/rtr8RLk.jpg" },
    { id: 103, name: "స్వైట్స్ (Switches)", price: 10, image: "https://i.imgur.com/SolFj6G.jpg" },
    { id: 104, name: "2 పిన్ ప్లగ్ (2 Pin Plug)", price: 10, image: "https://i.imgur.com/Oh6qZPe.jpg" },
    { id: 105, name: "3 పిన్ ప్లగ్ (3 Pin Plug)", price: 20, image: "https://i.imgur.com/Zlz0Hol.jpg" },
    { id: 106, name: "వైర్లు (Wires)", image: "https://i.imgur.com/DhgFc4R.jpg" },
    { id: 107, name: "ఫీమేల్ ప్లగ్ (Female Plug)", price: 10, image: "https://i.imgur.com/KMKOzeI.jpg" },
    { id: 108, name: "మేల్ ప్లగ్ (Male Plug)", price: 10, image: "https://i.imgur.com/Oh6qZPe.jpg" },
    { id: 109, name: "అశోకా పొడి (Ashoka Powder)", price: 10, image: "https://i.imgur.com/Q4A1HLc.jpg" },
    { id: 110, name: "పౌండ్స్ పొడి (Ponds Powder)", price: 10, image: "https://i.imgur.com/Io3767q.jpg" },
    { id: 111, name: "తెల్ల దారం (White Thread)", price: 15, image: "https://i.imgur.com/v1qtyMa.jpg" },
    { id: 112, name: "దారం (Thread)", price: 5, image: "https://i.imgur.com/5QAGKoT.jpg" },
    { id: 113, name: "బీడి దారం 1 (Bidi Thread 1)", price: 15, image: "https://i.imgur.com/TLhGdDY.jpg" },
    { id: 114, name: "బీడి దారం 2 (Bidi Thread 2)", price: 15, image: "https://i.imgur.com/zTpVm17.jpg" },
    { id: 115, name: "బీడి దారం 3 (Bidi Thread 3)", price: 15, image: "https://i.imgur.com/zv4OOPm.jpg" },
    { id: 116, name: "బీడి దారం 4 (Bidi Thread 4)", price: 15, image: "https://i.imgur.com/5CaMHGF.jpg" },
    { id: 117, name: "దీపం నూనె (Deepam Oil)", price: 35, image: "https://i.imgur.com/RrPo9iG.jpg" },
    { id: 118, name: "తెల్ల కాగితాలు (White Papers)", price: 1, image: "https://i.imgur.com/qImFGEA.jpg" },
    { id: 119, name: "మాస్కులు (Masks)", price: 20, image: "https://i.imgur.com/apjnLW0.jpg" },
    { id: 120, name: "మెడీ రాప్ ప్లాస్టర్ (Medi Wrap Plaster)", price: 5, image: "https://i.imgur.com/ZB156cn.jpg" },
    { id: 121, name: "చిన్న ప్లాస్టర్ (Small Plaster)", price: 2, image: "https://i.imgur.com/P4yZiZk.jpg" },
    { id: 122, name: "గోలీలు (Marbles)", price: 5, image: "https://i.imgur.com/f8v6YwF.jpg" },
    { id: 123, name: "పెద్ద స్కేల్ (Big Scale)", price: 20, image: "https://i.imgur.com/jeQJaOy.jpg" },
    { id: 124, name: "చిన్న స్కేల్ (Small Scale)", price: 10, image: "https://i.imgur.com/qsNAXMW.jpg" },
    { id: 125, name: "5/- పెన్లు (₹5 Pens)", price: 5, image: "https://i.imgur.com/1GtgoU9.jpg" },
    { id: 126, name: "5/- పెన్లు (₹4 Pens)", price: 5, image: "https://i.imgur.com/Ylc0BCC.jpg" },
    { id: 127, name: "పెన్సిల్స్ (Pencils)", price: 5, image: "https://i.imgur.com/G8LJplw.jpg" },
    { id: 128, name: "పెన్ పెన్సిల్స్ (Pen Pencils)", price: 10, image: "https://i.imgur.com/EzBaIaa.jpg" },
    { id: 129, name: "స్లేట్లు (Slates)", price: 30, image: "https://i.imgur.com/YukUeD6.jpg" },
    { id: 130, name: "గిలెట్ మెషిన్ (Gillette Machine)", price: 10, image: "https://i.imgur.com/zrLyLal.jpg" },
    { id: 131, name: "గిలెట్ గార్డ్ (Gillette Guard)", price: 10, image: "https://i.imgur.com/6s0iBb5.jpg" },
    { id: 132, name: "చతురస్ర పుస్తకం చిన్నది (Square Book Small)", price: 10, image: "https://i.imgur.com/jUluFIw.jpg" },
    { id: 133, name: "తెలుగు పుస్తకం చిన్నది (Telugu Book Small)", price: 10, image: "https://i.imgur.com/b7VwHKC.jpg" },
    { id: 134, name: "ఇంగ్లీష్ పుస్తకం చిన్నది (English Book Small)", price: 10, image: "https://i.imgur.com/TydvF4H.jpg" },
    { id: 135, name: "తెల్ల పుస్తకం చిన్నది (White Book Small)", price: 10, image: "https://i.imgur.com/jAhCHdu.jpg" },
    { id: 136, name: "1 లైన్ పుస్తకం చిన్నది (1 Line Book Small)", price: 10, image: "https://i.imgur.com/ORuMkxl.jpg" },
    { id: 137, name: "తెల్ల పొడుగు పుస్తకం (White Long Book)", price: 15, image: "https://i.imgur.com/zyVXZ3n.jpg" },
    { id: 138, name: "లైన్ పొడుగు పుస్తకం (Line Long Book)", price: 15, image: "https://i.imgur.com/QgKujls.jpg" },
    { id: 139, name: "2 ఇన్ 1 పుస్తకం (2 in 1 Book)", price: 30, image: "https://i.imgur.com/uDNdpqe.jpg" },
    { id: 140, name: "కాండిల్స్ (Candles)", price: 5, image: "https://i.imgur.com/eNcA1ow.jpg" },
    { id: 141, name: "కత్తి (Knife)", price: 10, image: "https://i.imgur.com/cC4as00.jpg" },
    { id: 142, name: "బెలూన్స్ (Balloons)", price: 2, image: "https://i.imgur.com/SPt9QrC.jpg" },
    { id: 143, name: "అగర్బత్తి (Incense Sticks)", price: 15, image: "https://i.imgur.com/3QwqnR5.jpg" },
    { id: 144, name: "తెల్ల బల్బ్ (White Bulb)", price: 120, image: "https://i.imgur.com/kQCCjv5.jpg" },
    { id: 145, name: "ఎర్ర బల్బ్ (Red Bulb)", price: 15, image: "https://i.imgur.com/schZQcA.jpg" },
    { id: 146, name: "దోమ స్టిక్స్ (Mosquito Sticks)", price: 15, image: "https://i.imgur.com/9htwHNl.jpg" },
    { id: 147, name: "దోమ పేపర్లు (Mosquito Papers)", price: 10, image: "https://i.imgur.com/XGEw817.jpg" },
    { id: 148, name: "జాజు (Camphor)", price: 10, image: "https://i.imgur.com/5EgjG6Q.jpg" },
    { id: 149, name: "వాటర్ ప్యాకెట్లు (Water Packets)", price: 2, image: "https://i.imgur.com/mqePUF4.jpg" },
    { id: 150, name: "సూది (పిన్స్) (Pins)", price: 2, image: "https://i.imgur.com/eX21psb.jpg" },
    { id: 151, name: "సేఫ్టీ పిన్స్ (Safety Pins)", price: 5, image: "https://i.imgur.com/BbzHvr4.jpg" },
    { id: 152, name: "డాల్డా (Dalda)", price: 12, image: "https://i.imgur.com/fKft37U.jpg" },
    { id: 153, name: "జెట్ (Jet)", price: 4, image: "https://i.imgur.com/mKPVeWV.jpg" },
    { id: 154, name: "కంఫర్ట్ చిన్నది (Comfort Small)", price: 4, image: "https://i.imgur.com/cxvyCOj.jpg" },
    { id: 155, name: "కంఫర్ట్ పెద్దది (Comfort Big)", price: 58, image: "https://i.imgur.com/7FxZR77.jpg" },
    { id: 156, name: "హార్పిక్ (Harpic)", price: 45, image: "https://i.imgur.com/CGo0oWv.jpg" },
    { id: 157, name: "లిజోల్ (Lizol)", price: 40, image: "https://i.imgur.com/SSYRRTw.jpg" },
    { id: 158, name: "వాటికా హెయిర్ ఆయిల్ (Vatika Hair Oil)", price: 12, image: "https://i.imgur.com/HDpAiyx.jpg" },
    { id: 159, name: "అలోవెరా హెయిర్ ఆయిల్ (Aloe Vera Hair Oil)", price: 75, image: "https://i.imgur.com/mGa38rY.jpg" },
    { id: 160, name: "పారాచూట్ హెయిర్ ఆయిల్ (Parachute Hair Oil)", price: 10, image: "https://i.imgur.com/6dJgOHa.jpg" },
    { id: 161, name: "ఫారూకీ పొడి (Farooky Powder)", price: 55, image: "https://i.imgur.com/KPRoktS.jpg" },
    { id: 162, name: "మెడిమిక్స్ సబ్బు (Medimix Soap)", price: 10, image: "https://i.imgur.com/mDCfNXf.jpg" },
    { id: 163, name: "ఎక్స్పర్ట్ సబ్బు (Xpert Soap)", price: 5, image: "https://i.imgur.com/CvVkJCn.jpg" },
    { id: 164, name: "గోద్రెజ్ నెం.1 సబ్బు (Godrej No.1 Soap)", price: 10, image: "https://i.imgur.com/pZsq5D4.jpg" },
    { id: 165, name: "సర్ఫ్ ఎక్సెల్ సబ్బు (Surf Excel Soap)", price: 10, image: "https://i.imgur.com/SsRCmNX.jpg" },
    { id: 166, name: "సింతాల్ సబ్బు (Cinthol Soap)", price: 10, image: "https://i.imgur.com/LOhmqZ1.jpg" },
    { id: 167, name: "ఎక్స్ ఎక్స్ ఎక్స్ సబ్బు (XXX Soap)", price: 10, image: "https://i.imgur.com/zH4pSfc.jpg" },
    { id: 168, name: "డెటాల్ సబ్బు (Dettol Soap)", price: 10, image: "https://i.imgur.com/OqZfRae.jpg" },
    { id: 169, name: "డోవ్ సబ్బు (Dove Soap)", price: 10, image: "https://i.imgur.com/fr2VZu5.jpg" },
    { id: 170, name: "సంతోర్ సబ్బు (Santoor Soap)", price: 10, image: "https://i.imgur.com/cm6PlG5.jpg" },
    { id: 171, name: "సంతోర్ సబ్బు (Santoor Soap)", price: 30, image: "https://i.imgur.com/j5yqyc5.jpg" },
    { id: 172, name: "విమ్ సబ్బు (Vim Soap)", price: 5, image: "https://i.imgur.com/TTwnupo.jpg" },
    { id: 173, name: "మైసూర్ సాండల్ సబ్బు (Mysore Sandal Soap)", price: 42, image: "https://i.imgur.com/f8GzN2N.jpg" },
    { id: 174, name: "బాంబినో నూడుల్స్ (Bambino Noodles)", price: 10, image: "https://i.imgur.com/P4s7hXq.jpg" },
    { id: 175, name: "సైబాల్ (Saibal)", price: 37, image: "https://i.imgur.com/R478UTV.jpg" },
    { id: 176, name: "యిప్పీ (Yippee)", price: 5, image: "https://i.imgur.com/ntVLHOB.jpg" },
    { id: 177, name: "కారం (Karam)", price: 120, image: "https://i.imgur.com/4dACZo2.jpg" },
    { id: 178, name: "ఫెయిర్ & లవ్లీ (Fair & Lovely)", price: 10, image: "https://i.imgur.com/YgDq1Ey.jpg" },
    { id: 179, name: "మెన్స్ ఫెయిర్ & లవ్లీ (Men's Fair & Lovely)", price: 10, image: "https://i.imgur.com/8WmAKP1.jpg" },
    { id: 180, name: "వాసలిన్ (Vaseline)", price: 5, image: "https://i.imgur.com/mpQ01rS.jpg" },
    { id: 181, name: "రస్క్ (Rusk)", price: 10, image: "https://i.imgur.com/kxwqBlk.jpg" },
    { id: 182, name: "బ్రెడ్ ప్యాకెట్ (Bread Packet)", price: 30, image: "https://i.imgur.com/3FemlaA.jpg" },
    { id: 183, name: "పెద్ద బ్రెడ్ (Big Bread)", price: 30, image: "https://i.imgur.com/z5Jq6Mn.jpg" },
    { id: 184, name: "జంబో వాటర్ గ్లాస్ (Jumbo Water Glass)", price: 2, image: "https://i.imgur.com/V3KsvGU.jpg" },
    { id: 185, name: "సాధారణ గ్లాస్ (Normal Water Glass)", price: 40, image: "https://i.imgur.com/KWA5Kk7.jpg" },
    { id: 186, name: "టీ కప్పులు (Tea Cups)", price: 40, image: "https://i.imgur.com/EoiedAl.jpg" },
    { id: 187, name: "బఫే ప్లేట్లు (Buff Plates)", price: 3, image: "https://i.imgur.com/0DB063W.jpg" },
    { id: 188, name: "కూర్చునే ప్లేట్లు (Sitting Plates)", price: 2, image: "https://i.imgur.com/hjIag1w.jpg" },
    { id: 189, name: "టిఫిన్ ప్లేట్లు (Tiffin Plates)", price: 1, image: "https://i.imgur.com/pu18uAG.jpg" },
    { id: 190, name: "ఘాడి పౌడర్ (Ghadi Powder)", price: 10, image: "https://i.imgur.com/k1qjEXw.jpg" },
    { id: 191, name: "టైడ్ పౌడర్ (Tide Powder)", price: 10, image: "https://i.imgur.com/QGnoS6u.jpg" },
    { id: 192, name: "స్కెచెస్ బాక్స్ 1 (Sketches Box 1)", price: 15, image: "https://i.imgur.com/pn5gaHr.jpg" },
    { id: 193, name: "స్కెచెస్ బాక్స్ 2 (Sketches Box 2)", price: 15, image: "https://i.imgur.com/98URbke.jpg" },
    { id: 194, name: "కాంగారో పిన్స్ (Kangaro Pins)", price: 10, image: "https://i.imgur.com/2FE8uSH.jpg" },
    { id: 195, name: "కాంగారో పిన్పంచ్ (Kangaro Pin Punch)", price: 70, image: "https://i.imgur.com/3LdutDS.jpg" },
    { id: 196, name: "ఎవర్ రెడీ (Eveready)", price: 13, image: "https://i.imgur.com/tcUt9EX.jpg" },
    { id: 197, name: "పాంపర్స్ (Pampers)", price: 10, image: "https://i.imgur.com/XkehXby.jpg" },
    { id: 198, name: "ప్యాడ్స్ (Pads)", price: 30, image: "https://i.imgur.com/0nyItfb.jpg" },
    { id: 199, name: "హారతి కర్పూరం (Harati Camphor)", price: 5, image: "https://i.imgur.com/9ELNVsm.jpg" },
    { id: 200, name: "ఇండికా హెయిర్ కలర్ (Indica Hair Color)", price: 15, image: "https://i.imgur.com/WiEIekg.jpg" },
    { id: 201, name: "గోద్రెజ్ హెయిర్ కలర్ (Godrej Hair Color)", price: 21, image: "https://i.imgur.com/D1uK9Q5.jpg" },
    { id: 202, name: "నిషా హెయిర్ కలర్ (Nisha Hair Color)", price: 15, image: "https://i.imgur.com/yY2S9O6.jpg" },
    { id: 203, name: "జాండు బామ్ (Zandu Balm)", price: 45, image: "https://i.imgur.com/CPkMlmi.jpg" },
    { id: 204, name: "మెంటో ప్లస్ (Mento Plus)", price: 42, image: "https://i.imgur.com/vxSkzpB.jpg" },
    { id: 205, name: "పాపడ్ (Papad)", price: 20, image: "https://i.imgur.com/tGZ1stP.jpg" },
    { id: 206, name: "ఓకే జామున్ (Okay Jamun)", price: 40, image: "https://i.imgur.com/P1rbQ62.jpg" },
    { id: 207, name: "డెటాల్ (Dettol)", price: 40, image: "https://i.imgur.com/bwmHZXx.jpg" },
    { id: 208, name: "కరాచీ మెహంది (Karachi Mehendi)", price: 20, image: "https://i.imgur.com/z27pvbx.jpg" },
    { id: 209, name: "బంసురి మెహంది (Bansuri Mehendi)", price: 10, image: "https://i.imgur.com/b6XQN9y.jpg" },
    { id: 210, name: "కుడుకలు (Kudukalu)", image: "https://i.imgur.com/lhcL9Sq.jpg" },
    { id: 211, name: "కొబ్బరికాయ (Coconut)", image: "https://i.imgur.com/rBzBFjI.jpg" },
    { id: 212, name: "బలపం (Balapam)", price: 10, image: "https://i.imgur.com/youj6et.jpg" },
    { id: 213, name: "చాక్‌పీస్ (chocopies)", price: 20, image: "https://i.imgur.com/U45Ax4V.jpg" },
    { id: 214, name: "బెల్లం (Jaggery)", image: "https://i.imgur.com/UFrCwEL.jpg" }, 
    { id: 215, name: "ఫేవిక్విక్ (Fevikwik)", price: 5, image: "https://i.imgur.com/GUPsJe7.jpg" }, 
    { id: 216, name: "ఫేవికాల్ (Fevicol)", price: 5, image: "https://i.imgur.com/lyRldYz.jpg" }, 
    { id: 217, name: "ఎం-సీల్ (M-Seal)", price: 10, image: "https://i.imgur.com/t4wibZO.jpg" }, 
    { id: 218, name: "జెమిని టీ (Gemini Tea)", price: 10, image: "https://i.imgur.com/I1k1cts.jpg" }, 
    { id: 219, name: "బ్లాక్ రోజ్ టీ (Black Rose Tea)", price: 12, image: "https://i.imgur.com/8xdkdlW.jpg" },
    { id: 220, name: "పీతాంబరి (Pitambari Powder)", price: 5, image: "https://i.imgur.com/PNJvfDC.jpg" },
  
  ],
  "ఖారా (Snacks)": [
    { id: 221, name: "బొంది ఖారా (Boondi Khara)", price: 5, image: "https://i.imgur.com/BV1Wivv.jpg" },
    { id: 222, name: "ఎర్ర శనగలు (Red Peanuts)", price: 5, image: "https://i.imgur.com/plgqnxo.jpg" },
    { id: 223, name: "పచ్చ శనగలు (Green Peanuts)", price: 5, image: "https://i.imgur.com/jLnBCgl.jpg" },
    { id: 224, name: "మసాల పల్లీలు (Masala Peanuts)", price: 5, image: "https://i.imgur.com/S8w3335.jpg" },
    { id: 225, name: "మిక్స్‌డ్ ఖారా (Mixed Khara)", price: 5, image: "https://i.imgur.com/A0bOVY2.jpg" },
    { id: 226, name: "సన్న ఖారా (Thin Khara)", price: 5, image: "https://i.imgur.com/MdFFi4v.jpg" },
    { id: 227, name: "చిన్న రింగ్స్ (Small Rings)", price: 1, image: "https://i.imgur.com/chWu84X.jpg" },
    { id: 228, name: "పెద్ద రింగ్స్ (Big Rings)", price: 1, image: "https://i.imgur.com/1K3Akpg.jpg" },
    { id: 229, name: "మక్క చిప్స్ 1 (Corn Chips 1)", price: 5, image: "https://i.imgur.com/IEDaJVY.jpg" },
    { id: 230, name: "మక్క చిప్స్ 2 (Corn Chips 2)", price: 2, image: "https://i.imgur.com/pXKYhBL.jpg" },
    { id: 231, name: "రింగ్జ్ (Ringz)", price: 5, image: "https://i.imgur.com/0fcQK2c.jpg" },
    { id: 232, name: "మురుమురాలు (Puffed Rice)", price: 5, image: "https://i.imgur.com/UqsIfrQ.jpg" },
    { id: 233, name: "చకోడీ (Chakodi)", price: 5, image: "https://i.imgur.com/rV4p670.jpg" },
    { id: 234, name: "ముంగ దాల్ (Moong Dal)", price: 5, image: "https://i.imgur.com/37PqomN.jpg" },
    { id: 235, name: "పాపడ(Papdi)", price: 5, image: "https://i.imgur.com/W1RO27f.jpg" },
    { id: 236, name: "తకాటక్ (Takatak)", price: 5, image: "https://i.imgur.com/3rbnvT0.jpg" },
    { id: 237, name: "సోయా స్టిక్స్ (Soya Sticks)", price: 5, image: "https://i.imgur.com/UoolDu3.jpg" },
    { id: 238, name: "పాప్‌డీ గటhiya (Papdi Gathiya)", price: 5, image: "https://i.imgur.com/4kYlX05.jpg" },
    { id: 239, name: "హాల్కే ఫుల్కే 1 (Halkay Phulkay 1)", price: 5, image: "https://i.imgur.com/Aopf8ZL.jpg" },
    { id: 240, name: "హాల్కే ఫుల్కే 2 (Halkay Phulkay 2)", price: 5, image: "https://i.imgur.com/B4oDAXp.jpg" },
    { id: 241, name: "స్టిక్స్ (Sticks)", price: 5, image: "https://i.imgur.com/MDJZsov.jpg" },
    { id: 242, name: "బొంగులు (Bongulu)", price: 5, image: "https://i.imgur.com/3wpolgK.jpg" },
  ],
  "షాంపూలు (Shampoos)": [
    { id: 243, name: "చిక్ (Chik)", price: 0.50, image: "https://i.imgur.com/XbK3HhN.jpg" },
    { id: 244, name: "కార్తిక (Karthika)", price: 0.50, image: "https://i.imgur.com/sPtf0cb.jpg" },
    { id: 245, name: "క్లినిక్ ప్లస్ (Clinic Plus)", price: 1, image: "https://i.imgur.com/wZgikhC.jpg" },
    { id: 246, name: "వాటికా (Vatika)", price: 1, image: "https://i.imgur.com/hdbUzjl.jpg" },
    { id: 247, name: "సన్‌సిల్క్ (Sunsilk)", price: 1, image: "https://i.imgur.com/aXwOe9n.jpg" },
    { id: 248, name: "పాంటీన్ (Pantene)", price: 2, image: "https://i.imgur.com/U3Xi6ec.jpg" },
    { id: 249, name: "హిమాలయ (Himalaya)", price: 2, image: "https://i.imgur.com/iioVNv8.jpg" },
    { id: 250, name: "మీరా (Meera)", price: 2, image: "https://i.imgur.com/SJM25Ii.jpg" },
    { id: 251, name: "హెడ్ అండ్ షోల్డర్స్ (Head & Shoulders)", price: 2, image: "https://i.imgur.com/uiGrKd9.jpg" },
    { id: 252, name: "డోవ్ (Dove)", price: 2, image: "https://i.imgur.com/ERv4zV7.jpg" },
  ],
  "బిస్కెట్లు (Biscuits)": [
    { id: 253, name: "పతంజలి (Patanjali)", price: 5, image: "https://i.imgur.com/mp4hTv9.jpg" },
    { id: 254, name: "యూనిబిక్ (Unibic)", price: 5, image: "https://i.imgur.com/Yhof1kG.jpg" },
    { id: 255, name: "బౌన్స్ (Bounce)", price: 5, image: "https://i.imgur.com/M6jnXW7.jpg" },
    { id: 256, name: "20-20", price: 5, image: "https://i.imgur.com/EUCdu6A.jpg" },
    { id: 257, name: "మారీ (Marie)", price: 5, image: "https://i.imgur.com/WWwqYSQ.jpg" },
    { id: 258, name: "ఓరియో (Oreo)", price: 5, image: "https://i.imgur.com/uqfMAjF.jpg" },
    { id: 259, name: "గుడ్ డే (Good Day)", price: 5, image: "https://i.imgur.com/Iohxq9z.jpg" },
    { id: 260, name: "మోనాకో (Monaco)", price: 5, image: "https://i.imgur.com/Arko3FV.jpg" },
    { id: 261, name: "మిల్క్ బికీస్ (Milk Bikis)", price: 5, image: "https://i.imgur.com/mm9uEDM.jpg" },
    { id: 262, name: "హ్యాపీ హ్యాపీ (Happy Happy)", price: 5, image: "https://i.imgur.com/I9pNXic.jpg" },
    { id: 263, name: "మాంస (Moms)", price: 5, image: "https://i.imgur.com/2VVUqOZ.jpg" },
    { id: 264, name: "మ్యాజిక్ (Magic)", price: 5, image: "https://i.imgur.com/JxjBOEA.jpg" },
    { id: 265, name: "న్యూట్రి ఛాయిస్ (Nutri Choice)", price: 5, image: "https://i.imgur.com/sZLFhKr.jpg" },
    { id: 266, name: "క్రాక్ జాక్ (Crack Jack)", price: 5, image: "https://i.imgur.com/Awwe6tV.jpg" },
    { id: 267, name: "ఒస్మానియా బిస్కెట్ (Osmania Biscuit)", price: 1, image: "https://i.imgur.com/llbakWL.jpg" }

  ],
  "కూల్ డ్రింక్స్ (Cool Drinks)": [
    { id: 268, name: "మాజా (Maaza)", price: 25, image: "https://i.imgur.com/MRj4HwZ.jpg" },
    { id: 269, name: "మాన్స్టర్ (Monster)", price: 20, image: "https://i.imgur.com/4mdw5bt.jpg" },
    { id: 270, name: "ఫిజ్ (Fizz)", price: 10, image: "https://i.imgur.com/FLEHj94.jpg" },
    { id: 271, name: "ఫ్రూటీ (Frooti)", price: 12, image: "https://i.imgur.com/jePld7i.jpg" },
    { id: 272, name: "స్ప్రైట్ (Sprite)", price: 20, image: "https://i.imgur.com/blaOGI7.jpg" },
    { id: 273, name: "థమ్స్‌అప్ (Thums Up)", price: 20, image: "https://i.imgur.com/4sYjP5v.jpg" },
    { id: 274, name: "బాదం మిల్క్ (Badam Milk)", price: 40, image: "https://i.imgur.com/VSTsLnC.jpg" },
    { id: 275, name: "Soda", price: 25, image: "https://i.imgur.com/A2MhKiS.jpg" },
  ],
  "₹5/- rs Items": [
    { id: 276, name: "బాలుషా (Balusha)", image: "https://i.imgur.com/Dked8KA.jpg" },
    { id: 277, name: "మైసూర్ పాక్ (Mysore Pak)", image: "https://i.imgur.com/y6Wnid7.jpg" },
    { id: 278, name: "సన్ పాపడ్ (Sun Papad)", image: "https://i.imgur.com/DpzDEJZ.jpg" },
    { id: 279, name: "రసగుల్ల (Rasgulla)", image: "https://i.imgur.com/xbC03mV.jpg" },
    { id: 280, name: "కిట్‌క్యాట్ (KitKat)", image: "https://i.imgur.com/G1a5445.jpg" },
    { id: 281, name: "వాఫర్ (Wafer)", image: "https://i.imgur.com/btw9Qgh.jpg" },
  ],
  "₹2/- rs Items": [
    { id: 282, name: "ట్రీట్ (Treat)", image: "https://i.imgur.com/YctVVzU.jpg" },
    { id: 283, name: "బెల్లం స్వీట్ (Jaggery Sweet)", image: "https://i.imgur.com/foEEkCK.jpg" },
    { id: 284, name: "పచక ఆమ్ల (Amla Candy)", image: "https://i.imgur.com/VLkIWJc.jpg" },
    { id: 285, name: "మిల్క్ ట్విస్ట్ (Milk Twist)", image: "https://i.imgur.com/YIVhBMX.jpg" },
    { id: 286, name: "బూస్ట్ (Boost)", image: "https://i.imgur.com/icnryPG.jpg" },
    { id: 287, name: "హార్లిక్స్ (Horlicks)", image: "https://i.imgur.com/91zAiPG.jpg" },
    { id: 288, name: "సీసీ స్టిక్ (CC Stick)", image: "https://i.imgur.com/aCsNBUA.jpg" },
  ],
  "₹1/- rs Items": [
    { id: 289, name: "టైగర్ సుపారి (Tiger Supari)", image: "https://i.imgur.com/q1diD0J.jpg" },
    { id: 290, name: "దిల్దార్ సుపారి (Dildar Supari)", image: "https://i.imgur.com/O14lz7F.jpg" },
    { id: 291, name: "సోనీ సాంప్ (Sony Samp)", image: "https://i.imgur.com/ff0lOBN.jpg" },
    { id: 292, name: "రవలి (Rawali)", image: "https://i.imgur.com/khpsk2R.jpg" },
    { id: 293, name: "Crane", image: "https://i.imgur.com/pc1jJuZ.jpg" },
    { id: 294, name: "బూమర్ (Boomer)", image: "https://i.imgur.com/MgD9Vmi.jpg" },
    { id: 295, name: "జస్ట్ జెల్లీ (Just Jelly)", image: "https://i.imgur.com/cZcaZhP.jpg" },
    { id: 296, name: "లాలీపాప్ (Lollipop)", image: "https://i.imgur.com/M4q4FEb.jpg" },
    { id: 297, name: "బిస్కెట్లు (Biscuits)", image: "https://i.imgur.com/2KnWhMa.jpg" },
    { id: 298, name: "పల్లి పట్టీ (Peanut Chikki)", image: "https://i.imgur.com/ovN1lX1.jpg" },
    { id: 299, name: "క్యాండీలేక్ (Candy Stick)", image: "https://i.imgur.com/97j7I5C.jpg" },
    { id: 300, name: "చింతపండు (Tamarind)", image: "https://i.imgur.com/g5BVslS.jpg" },
    { id: 301, name: "విక్స్ (Vicks)", image: "https://i.imgur.com/G8SXj9c.jpg" },
    { id: 302, name: "స్ట్రాబెర్రీ (Strawberry)", image: "https://i.imgur.com/SBpoeMd.jpg" },
    { id: 303, name: "జెమ్స్ (Gems)", image: "https://i.imgur.com/0GWWNiV.jpg" },
    { id: 304, name: "గ్రీన్ ఆపిల్ (Green Apple)", image: "https://i.imgur.com/zbFvJCJ.jpg" },
  ],
  "ఇతర చాక్లెట్లు (Other Chocolates)": [
    { id: 305, name: "మిల్కీ చాక్లెట్స్ (Milky Chocolates)", price: 1, image: "https://i.imgur.com/ESRW7kE.jpg" },
    { id: 306, name: "డార్క్ చాక్లెట్ (Dark Chocolate)", price: 1, image: "https://i.imgur.com/iuhXRZ3.jpg" },
    { id: 307, name: "డార్క్ చాక్లెట్ (white Dark Chocolate)", price: 1, image: "https://i.imgur.com/8YfH2LB.jpg" },
  ],
 };

const Home = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (item, quantity) => {
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      setCart(
        cart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + quantity }
            : cartItem
        )
      );
    } else {
      setCart([...cart, { ...item, quantity }]);
    }
  };

  const removeFromCart = (item) => {
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);
    if (existingItem.quantity === 1) {
      setCart(cart.filter((cartItem) => cartItem.id !== item.id));
    } else {
      setCart(
        cart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        )
      );
    }
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => {
      const price = item.price || item.pricePerKg || item.pricePerLitre;
      return total + price * item.quantity;
    }, 0);
  };
  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };
  const shareOnWhatsApp = () => {
    const shopOwnerNumber = "918185910215"; // Replace with actual number
    const message = cart
      .map((item) => `${item.name} - ${item.quantity} ${item.unit || "items"}`)
      .join(", ");
    const totalPrice = getTotalPrice();
    const whatsappLink = `https://wa.me/${shopOwnerNumber}?text=Order Details: ${message}. Total: ₹${totalPrice}`;
    window.open(whatsappLink, "_blank");
  };

  return (
    <div>
      {/* Fixed Header Section */}
      <div> 
      <div className="shop-header">
      {/* Left Section: Logo  Details */}
      <div className="header-left">
        <img
          src="https://i.imgur.com/DyyCvQ8.jpg" // Replace with the actual logo URL
          alt="Shop Logo"
          className="shop-logo"
        />
        <div className="shop-details">
          <h1>SR KIRANAM</h1>
          <h3>Owner: BHARATH</h3>
          <p>Phone: 8185910215</p>
          <div className="contact-icons">
            <a
              href="bhargavb272@gmail.com"
              className="icon email-icon"
            >
              📧
            </a>
            <a
              href="https://maps.app.goo.gl/3byhHkzLqksQia5t5"
              target="_blank"
              rel="noopener noreferrer"
              className="icon map-icon"
            >
              📍
            </a>
            <a
              href="https://wa.me/918185910215"
              target="_blank"
              rel="noopener noreferrer"
              className="icon whatsapp-icon"
            >
              💬
            </a>
            <a href="tel:8185910215" className="icon call-icon">
              📞
            </a>
          </div>
        </div>
      </div>

      {/* Right Section: Free Door Delivery and Extra Info */}
      <div className="header-right">
         <br  />
        <div className="free-delivery-banner">
          🎉 Free Door Delivery 🎉
        </div> <br/>
        <button className="cart-button" onClick={() => document.getElementById("ca").scrollIntoView()}>
            CART <span className="cart-count">{getTotalItems()}</span>
          </button>
      </div>
    </div>
      </div>
      {/* Ads Sechhghghgjhtion */}
      <div className="ads-section">
        <marquee behavior="scroll" direction="left">
        మీ వ్యాపారాన్ని కూడా నచ్చిన విధంగా ఆన్‌లైన్ చేయండి. మరింత ఆదాయాన్ని పొందండి. మరిన్ని వివరాలకు ("Lucky Software Solutions") 7036783962 నంబర్‌ను సంప్రదించండి.
        </marquee>
      </div>
      {/* Product Categories */}
      {Object.keys(categories).map((category) => (
        <div key={category} className="category">
          <h2>{category}</h2>
          <div className="product-list">
            {categories[category].map((item) => (
              <div key={item.id} className="product-card">
                <img src={item.image} alt={item.name} />
                <h3>{item.name}</h3>
                <p>Price: ₹{item.price} <s>₹{item.mrp}</s></p>
                <button onClick={() => addToCart(item, 1)}>Add to Cart</button>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Cart Section */}
      <div className="cart">
        <h3 id="ca">Cart</h3>
        {cart.map((item) => (
          <div key={item.id} className="cart-item">
            <span>{item.name}</span>
            <button onClick={() => removeFromCart(item)}>-</button>
            <span>{item.quantity}</span>
            <button onClick={() => addToCart(item, 1)}>+</button>
          </div>
        ))}
        <h4>Total: ₹{getTotalPrice()}</h4>
        <button className="sow" onClick={shareOnWhatsApp}>Share on WhatsApp</button>
      </div>

      {/* Footer Section */}
      <footer className="footer">
        <p>Address: Vill: Panchagudi, Mo: lokeshwaram, nirmal.</p>
        <p>Pincode: 504104</p>
        <p>&copy; 2025 E-Shop. All rights reserved.</p>
  
      </footer>
    </div>
    
  );
};

export default Home;