
const obstacle_level1=["id01_01","id01_02","id01_03","id02_01","id03_01","id18_01","id19_01","id20_01","id20_02","id20_03","id20_18","id20_19","id20_20","id19_20","id18_20","id03_20","id02_20","id01_20","id01_18","id01_19"];
const obstacle_level2=["id09_07","id09_08","id09_09","id09_10","id09_11","id09_12","id09_13","id09_14","id09_15","id12_07","id12_08","id12_09","id12_10","id12_11","id12_12","id12_13","id12_14","id12_15","id01_01","id01_02","id01_03","id02_01","id03_01","id18_01","id19_01","id20_01","id20_02","id20_03","id20_18","id20_19","id20_20","id19_20","id18_20","id03_20","id02_20","id01_20","id01_18","id01_19"];

const obstacle_level3=["id01_06","id02_06","id03_06","id04_06","id04_14","id04_15","id04_16","id04_17","id04_18","id04_19","id04_20","id05_06","id06_06","id07_06","id08_06","id08_14","id09_06","id09_14","id10_06","id10_14","id11_14","id12_14","id13_14","id14_14","id15_01","id15_02","id15_03","id15_04","id15_05","id15_06","id15_14","id16_14","id17_14","id18_14","id19_14","id20_14"];
const obstacle_level4=["id10_10","id10_11","id11_10","id11_11","id10_03","id10_04","id10_05","id10_06","id10_07","id11_03","id11_04","id11_05","id11_06","id11_07","id10_14","id10_15","id10_16","id10_17","id10_18","id11_14","id11_15","id11_16","id11_17","id11_18","id03_10","id04_10","id05_10","id06_10","id07_10","id03_11","id04_11","id05_11","id06_11","id07_11","id14_10","id15_10","id16_10","id17_10","id18_10","id14_11","id15_11","id16_11","id17_11","id18_11","id03_03","id03_04","id04_03","id04_04","id03_17","id03_18","id04_17","id04_18","id17_03","id17_04","id18_03","id18_04","id17_17","id17_18","id18_17","id18_18"];
const obstacle_level5=["id03_01","id03_02","id03_03","id03_04","id03_08","id03_10","id03_11","id03_12","id03_13","id03_14","id03_15","id03_16","id04_01","id05_01","id06_01","id09_01","id09_02","id09_03","id09_04","id09_05","id09_06","id09_07","id09_08","id09_09","id09_12","id09_13","id09_14","id09_15","id09_16","id09_17","id09_18","id09_19","id09_20","id13_01","id13_02","id13_03","id13_04","id13_05","id13_06","id13_07","id13_08","id13_09","id13_10","id13_11","id13_12","id14_12","id15_12","id16_12","id17_12","id18_12","id19_12","id20_12","id13_13","id13_14","id13_15","id13_16","id13_17","id13_18","id13_19","id13_20","id08_09","id07_09","id06_09","id05_09","id04_09","id03_09"];



function Obstacle(){
    return (
        <div>
            <br></br>
            <label for="Ob_pattern" className="Obstacle_lbl">SELECT YOUR LEVEL</label>
            
            <select id="Ob_pattern" className="btn btn-outline-info btn-rounded waves-effect" onChange={()=>ChangeObstacle(document.getElementById("Ob_pattern").value)}>
                <option className="btn btn-outline-secondary btn-rounded waves-effect" value="None">LEVEL 0</option>
                <option className="btn-outline-secondary" value="level1">LEVEL 1</option>
                <option className="btn-outline-secondary" value="Pattern2">LEVEL 2</option>
                <option className="btn-outline-secondary" value="Pattern3">LEVEL 3</option>
                <option className="btn-outline-secondary" value="Pattern4">LEVEL 4</option>
                <option className="btn-outline-secondary" value="Pattern5">LEVEL 5</option>
               
                
                
            </select>
         </div>
    );
}
function ChangeObstacle(pattern){
    ///////////Reset Display///////////
    document.getElementById('game_alert').innerHTML="";
    document.getElementById('game_alert').className="alert_class_hidden";
    document.getElementById("score").innerHTML="000";
    document.getElementById("timer").innerHTML=("00:00");
    for (let id of window.all_act_ids){
        document.getElementById(id).className="box";
    }
    for (let id of window.obstacle_pattern){
        document.getElementById(id).className="box";
    }
    ///////////////////////////////////
 
    switch (pattern) {
        case 'level1':
            window.obstacle_pattern=obstacle_level1;
            break;
        case 'Pattern2':
            window.obstacle_pattern=obstacle_level2;
            
            break;
        case 'Pattern3':
            window.obstacle_pattern=obstacle_level3;
            break;
            case 'Pattern4':
            window.obstacle_pattern=obstacle_level4;
            break;
            case 'Pattern5':
            window.obstacle_pattern=obstacle_level5;
            
            break;
           
        default:
            window.obstacle_pattern=[];
    }
    
    for (let id of window.obstacle_pattern){
        document.getElementById(id).className="obstacle_box";
    }
}


export default Obstacle;