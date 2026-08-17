let compareArr = [];

class Car {
    constructor(modelo, preco, alturacacamba, alturaveiculo, alturasolo, capacidadecarga, motor, potencia, volumecacamba, roda, image) {
        this.modelo = modelo;
        this.preco = preco;
        this.alturacacamba = alturacacamba;
        this.alturaveiculo = alturaveiculo;
        this.alturasolo = alturasolo;
        this.capacidadecarga = capacidadecarga;
        this.motor = motor;
        this.potencia = potencia;
        this.volumecacamba = volumecacamba;
        this.roda = roda;
        this.image = image;
    }
}

function GetCarArrPosition(arr, car) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].modelo === car.modelo) {
            return i;
        }
    }
    return -1;
}

function SetCarToCompare(checkbox, car) {
    if (checkbox.checked) {
        if (compareArr.length >= 2) {
            alert("Você pode selecionar no máximo 2 veículos para comparação.");
            checkbox.checked = false;
            return;
        }
        compareArr.push(car);
    } else {
        const pos = GetCarArrPosition(compareArr, car);
        if (pos !== -1) {
            compareArr.splice(pos, 1);
        }
    }
}

function ShowCompare() {
    if (compareArr.length !== 2) {
        alert("É necessário escolher dois veículos para realizar a comparação.");
        return;
    }
    UpdateCompareTable();
    document.getElementById("compare").style.display = "block";
}

function HideCompare() {
    document.getElementById("compare").style.display = "none";
}

function UpdateCompareTable() {
    for (let i = 0; i < 2; i++) {
        const car = compareArr[i];
        
        document.getElementById(`compare_image_${i}`).innerHTML = `<img src="${car.image}" width="150" />`;
        document.getElementById(`compare_modelo_${i}`).innerText = car.modelo;
        document.getElementById(`compare_alturacacamba_${i}`).innerText = car.alturacacamba;
        document.getElementById(`compare_alturaveiculo_${i}`).innerText = car.alturaveiculo;
        document.getElementById(`compare_alturasolo_${i}`).innerText = car.alturasolo;
        document.getElementById(`compare_capacidadecarga_${i}`).innerText = car.capacidadecarga;
        document.getElementById(`compare_motor_${i}`).innerText = car.motor;
        document.getElementById(`compare_potencia_${i}`).innerText = car.potencia;
        document.getElementById(`compare_volumecacamba_${i}`).innerText = car.volumecacamba;
        document.getElementById(`compare_roda_${i}`).innerText = car.roda;
        document.getElementById(`compare_preco_${i}`).innerText = "R$ " + Number(car.preco).toLocaleString('pt-BR');
    }
}