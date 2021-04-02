/**
 * This is the javascript file that dictates the behaviour for projectXS.html.
 * Author: Tarik LaRoda (A00440772)
 * Author: Rolvin Monteiro(A00438472)
 * Authir: Kiitan Mojeed (A00425797)
 */
function setup() {
    let wallWidth = $("#planSld").val();
    drawPlan(wallWidth);

    //draw elevation
    drawElevation();

    //hide insulation
    $("#insulationPage").toggle(false);

    //HIDE CONCEPTS 
    $("#localConditionsPage").toggle(false);
    $("#annualEnergyBudgetPage").toggle(false);
    $("#draftsAndVentilationPage").toggle(false);
    $("#insulationAndHeatLossPage").toggle(false);
    $("#materialsAndInsulationPage").toggle(false);
    $("#environmentalPage").toggle(false);

}

function showPage() {
    let viewChaptersSelect = $("#viewChaptersSelect").val()
    if (viewChaptersSelect === "Insulation") {
        $("#insulationPage").toggle(true);
    } else {
        $("#insulationPage").toggle(false);
    }   
}
function showConcepts(){
    let concepts = $("#concepts").val()

      //HIDE CONCEPTS 
      $("#localConditionsPage").toggle(false);
      $("#annualEnergyBudgetPage").toggle(false);
      $("#draftsAndVentilationPage").toggle(false);
      $("#insulationAndHeatLossPage").toggle(false);
      $("#materialsAndInsulationPage").toggle(false);
      $("#environmentalPage").toggle(false);

    if (concepts === "local conditions") {
        $("#localConditionsPage").toggle(true);
    } 
    else if (concepts === "annual energy"){
        $("#annualEnergyBudgetPage").toggle(true);
    }    
    else if (concepts === "drafts and ventilation"){
        $("#draftsAndVentilationPage").toggle(true);
    }    
    else if (concepts === "insulation and heat"){
        $("#insulationAndHeatLossPage").toggle(true);
    }    
    else if (concepts === "materials and insulation"){
        $("#materialsAndInsulationPage").toggle(true);
    }  
    else if (concepts === "environmental impact"){
        $("#environmentalPage").toggle(true);
    }  
}


/**
 * This function processess the inputs from the sliders to redraw the canvas
 */
function processInputs() {
    //create slider objects and context
    let wallWidth = $("#planSld").val();
    let windowArea = $("#elevationSld").val;
    draw(wallWidth, windowArea);
}
/**
 * This function draws the plan and elevation onto the canvas
 */
function draw(wallWidth, windowArea) {
    //create plan object and context
    let plan = document.getElementById(planCanvas);
    contextP = plan.getContext("2d");

    //create Elevation object and context
    let elevation = document.getElementById("elevationCanvas");
    contextE = elevation.getContext("2d");

    //Clear both Canvas
    contextP.clearRect(0, 0, plan.width, plan.height);
    contextE.clearRect(0, 0, elevation.width, elevation.height);

    //Draw Plan

    //Draw grey Background
    contextP.fillStyle = "#000000";
    contextP.lineWidth = 1;

    contextP.beginPath();
    contextP.fillRect(0, 0, plan.width, plan.height);
    contextP.stroke();

}
/**
 * draw Plan
 */
function drawPlan(rangevalue = '', colorCode = "#d2cbcd", windowArea = '') {

    //create plan object and context
    let plan = document.getElementById("planCanvas");
    let contextP = plan.getContext("2d");


    //Clear Canvas
    contextP.clearRect(0, 0, plan.width, plan.height);

    //Draw Plan

    //Draw grey Background
    contextP.fillStyle = "#d2cbcd";
    contextP.lineWidth = 1;

    contextP.beginPath();
    contextP.fillRect(0, 0, plan.width, plan.height);
    contextP.stroke();

    //draw container
    contextP.strokeStyle = "#3104fb";
    contextP.lineWidth = 2;

    contextP.beginPath();
    contextP.setLineDash([]);
    contextP.rect(0, 0, plan.width, 129);
    contextP.fillStyle = colorCode;
    contextP.fill();
    contextP.stroke();


    //draw inner container
    contextP.strokeStyle = "#3104fb";
    contextP.lineWidth = 2;

    contextP.beginPath();
    contextP.setLineDash([]);
    contextP.rect(rangevalue, rangevalue, plan.width - (rangevalue * 2), 129 - (rangevalue * 2));
    contextP.fillStyle = '#d2cbcd';
    contextP.fill();
    contextP.stroke();


    //draw window area
    contextP.strokeStyle = "#d2cbcd";
    contextP.lineWidth = 2;

    contextP.beginPath();
    if (windowArea >= 5 && rangevalue >= 10) {
        contextP.moveTo(50, 129 - rangevalue);
        contextP.lineTo(100, 129 - rangevalue);
        contextP.moveTo(50, 129);
        contextP.lineTo(100, 129);
        //fill color for the window
        contextP.rect(50, 129 - rangevalue, windowArea * 10, rangevalue);
        contextP.fillStyle = '#07ebf8';
        contextP.fill();
    }

    //to make blank space for broken line of the door
    contextP.moveTo(209, 129 - rangevalue);
    contextP.lineTo(258, 129 - rangevalue);
    contextP.moveTo(209, 129);
    contextP.lineTo(258, 129);
    contextP.stroke();

    // Broken line for window area
    contextP.strokeStyle = "black";
    contextP.lineWidth = 1;

    contextP.beginPath();
    contextP.setLineDash([3, 3]);
    if (windowArea >= 5 && rangevalue >= 10) {
        contextP.moveTo(50, 129);
        contextP.lineTo(50 + 10 * windowArea, 129);
        contextP.moveTo(50, 129 - rangevalue);
        contextP.lineTo(50 + 10 * windowArea, 129 - rangevalue);
    }

    // broken lines for the door
    contextP.moveTo(209, 129 - rangevalue);
    contextP.lineTo(258, 129 - rangevalue);
    contextP.moveTo(209, 129);
    contextP.lineTo(258, 129);
    contextP.stroke();

    //draw Door
    contextP.strokeStyle = "black";
    contextP.lineWidth = 2;
    contextP.beginPath();
    contextP.setLineDash([]);
    contextP.moveTo(209, 129);
    contextP.lineTo(209, 178);
    contextP.stroke();

    //draw door arc
    contextP.strokeStyle = "black";
    contextP.lineWidth = 1;
    contextP.beginPath();
    contextP.setLineDash([3, 3]);
    contextP.arc(209, 129, 49, 0, 0.5 * Math.PI)
    contextP.stroke();

}

/** 
 * To display the required canvas.
 */
function display() {
    let rangevalue = $("#planSld").val();
    let option = $("#optionBlockb").val();
    let windowArea = $("#windowArea").val();

    //textboxs
    // let txtRangeValue = document.getElementById("txtOpaqueThickness").val();
    // let txtWindowArea = document.getElementById("txtWindowArea").val();

    

    if (option == 0) {
        drawPlan(rangevalue, "");
    } else if (option == 1 && windowArea == 0) {
        drawPlan(rangevalue, "");
    } else if (option == 1 && windowArea > 0) {
        drawPlan(rangevalue, "", windowArea);
    } else if (option == 2) {
        drawPlan(rangevalue, "");
    } else if (option == 3) {
        drawPlan(rangevalue, "#e8e5e4");
    } else if (option == 4) {
        drawPlan(rangevalue, "#fec7d4");
    } else if (option == 5) {
        drawPlan(rangevalue, "#fdfaaa");
    }

    if (windowArea >= 0) {
        drawElevation(windowArea);
    }

    //set TextBox Values
    document.getElementById("txtOpaqueThickness").value = rangevalue *2;
    document.getElementById("txtWindowArea").value = windowArea;
}


function drawElevation(windowArea = '') {
    //create elevation object and context
    let elevation = document.getElementById("elevationCanvas");
    let contextE = elevation.getContext("2d");


    //Clear Canvas
    contextE.clearRect(0, 0, elevation.width, elevation.height);

    //draw Elevation
    //draw Blue Rectangle
    contextE.fillStyle = "#a3bcfd";
    contextE.lineWidth = 1;

    contextE.beginPath();
    contextE.fillRect(0, 0, elevation.width, elevation.height);
    contextE.stroke();

    //Draw the inner door
    contextE.fillStyle = "black";
    contextE.lineWidth = 2;

    contextE.beginPath();
    contextE.rect(209, 37, 49, 108);
    contextE.stroke();

    //Draw the outer door rect(-3,-3,+6,+6)
    contextE.fillStyle = "black";
    contextE.lineWidth = 2;

    contextE.beginPath();
    contextE.rect(206, 34, 55, 114);
    contextE.stroke();

    //Draw the outer window
    if (windowArea >= 5) {
        contextE.fillStyle = "black";
        contextE.lineWidth = 2;

        contextE.beginPath();
        contextE.rect(70, 37, 6 + 10 * windowArea, 6 + 10 * windowArea);
        contextE.stroke();
    }

    //Draw the inner window
    if (windowArea >= 5) {
        contextE.fillStyle = "black";
        contextE.lineWidth = 2;

        contextE.beginPath();
        contextE.rect(67, 34, 12 + 10 * windowArea, 12 + 10 * windowArea);
        contextE.stroke();
    }
    //draw doornob, half the height at the door
    contextE.fillStyle = "black";
    contextE.lineWidth = 1;

    contextE.beginPath();
    contextE.arc(250, 91, 3, 0, 2 * Math.PI);
    contextE.stroke();

}

// to display concepts menu
function concepts() {
    let choice = $("#concepts").find(":selected").text();

    if (choice === "local conditions") {
        console.log("Local conditions:");
        console.log("Heating demand is given in heating degree-days. The length of a Canadian heating season is the number of days below 18C. Coldness is the difference" +
            "between a desired indoor temperature of 20C and the average outdoor temperature on those days.")
        console.log("Humidity and especially windiness of a location also add to heating demand but are discussed elsewhere.")
        console.log("Warmer climates imply a cooling load: also subject for other chapters.")
        console.log("Please note that to reflect the Canadian experience, this app mixes units: Celsius for temperature, for example, but inches and feet for dimensons.")

    } else if (choice === "annual energy") {
        console.log("Annual Energy Budget");
        console.log("Envelope heat loss is only part of an energy budget. Lights, hot water appliances and electronics also consume energy. In ths chapter those other loads are fixed," +
            "on the assumpton that use of the building remains constant in all locations.")
        console.log("Envelope heat loss has at least two components: the effectivelyconductive losses that can be reduced by insulaton, and losses due to ventilation and drafts." +
            "Both are proportional to heating demand. looking at the energy budget graph, you will see that changing the insulation levels changes the conductive or insulation losses but not those due to air movement.")

    } else if (choice === "drafts and ventilation") {
        console.log("Drafts and Ventilation");
        console.log("Realistically, a larger window would admit more drafts, especally at the lower end of the quality scale, but that effect is ignored in the insulation chapter.")
        console.log("The drafts and ventilationchapter explains how energy losses due to infiltration are controlled by membranes, sealants, joint design, and meticulous quality control." +
            "It shows how ventilation losses can be managed through heat exchange, flow controls, and careful use of operable windows and vents.")

    } else if (choice === "insulation and heat ") {
        console.log("Insulation and Heat Loss")
        console.log("In North America, thermal resisitance is measured in R-values. The resistance of a material barrier is a product of its resistivity. In R/inch, and the inches of thickness." +
            "The actual effectiveness of insulation depends on the installaton of other factors, but this app gives drywall an R/inc of 1, fiberglass and cellulose insulation an R/inch of 3, and urethane spray an R/inch of 6.")
        console.log("In thin and poorly insulating assemblies, air films become significant. This is how painted sheet steel ends up with a nominal R of 1. When assemblies are alyered. R values can smply be totalled.")

    } else if (choice === "materials and insulation") {
        console.log("Materials and Insulation")
        console.log("Heat flow is inversely related to thermal resistance. The conduction of heat through a material is given as a U value, which is equal to 1/R. Add layers to a single R value before finding their U value.")
        console.log("Heat loss is a product of thermal demand and conductive liability. Thermal demand consolidates temperature difference and time, as in degree days. Thermal liability is a product of surface area and conductance.")
        console.log("The total thermal liability of an envelope is a sum of the liability of its portions> average conductance divides the total liability by the total area. The effective R-value of an envelope is the inverse of average conductance")
        console.log("Note that high R-value portions of an envelope have a smaller effect on the effective R-value than might be supposed. Conversely, low R-value portions of an envelope" +
            "such as windows have a larger effect on overall heat loss than their small area may suggest.")

    } else if (choice === "environmental impact") {
        console.log("Environmental Impact")
        console.log("The environmental impact of construction depends not only on the energy consumed in operating a building, but in energy consumed or 'embodied' in the " +
            "material through sourcing, manufacture, transport, amd assembly. Additionall, toxins and other ecological and soccial injuries need to be accounted for. the exact" +
            "calculations are complicated and debatable, but that's no reason to ignore them. They are the subject of several other chapters.")
    }
}