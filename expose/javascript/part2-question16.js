let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars:2
};

for (i in statistics){
    if (statistics[i]% 2 === 1 ){
        console.log(statistics[i]);
    }else if(i.indexOf("r") == 0 ){
        console.log(statistics[i]);
    }
}