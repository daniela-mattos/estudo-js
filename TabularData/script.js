chartIt();

async function chartIt(){
    const data = await getData();
    const ctx = document.getElementById('myChart');

    new Chart(ctx, {
    type: 'line',
    data: {
        labels: data.xs,
        datasets: [{
        label: 'Combined Land-Surface Air and Sea-Surface Water in Cº',
        data: data.ys,
        fill: false, //o padrão é false
        borderWidth: 1
                }]
            },
        options: {
            scales: {
                y: {
                    ticks: {
                        callback: function(value, index, ticks) {
                            return value + 'º';
                        }
                    }
                }
            }
        }
    });
}


async function getData() {
    const xs = [];
    const ys = [];
    const response = await fetch('ZonAnn.Ts+dSST.csv');
    const data = await response.text();
    // console.log('data:')
    //console.log(data);

    const table = data.split('\n').slice(1);
    //console.log("table slice:")
    //console.log(table);
    table.forEach(row => {
        //console.log(table);
        const columns = row.split(',');
        
        const year = parseInt(columns[0]);
        xs.push(year);
        const temp = columns[1];
        ys.push(parseFloat(temp)+14);
        console.log(year, temp);
    });
    return {xs, ys}
}
