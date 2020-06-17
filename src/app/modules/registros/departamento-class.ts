export class Departamento {
	id:number
	empresa:string
	desarrollo:string
	departamento:string
	descripcion:string
	tipo_venta:string
	metros_cuadrados:string
	recamaras:number
	banos:number
	patio_de_servicio:number
	elevador:number
	roof_garden_privado:number
	roof_garden_publico:number
	terraza:number
	estacionamiento:number
	precio_final:string
	fotos:{}
	vendido:number
	fecha_vendido:string
	vendedor:string
    direccion:string
    
    constructor(){
        this.id = undefined
        this.empresa = undefined
        this.desarrollo = undefined
        this.departamento = undefined
        this.descripcion = undefined
        this.tipo_venta = undefined
        this.metros_cuadrados = undefined
        this.recamaras = undefined
        this.banos = undefined
        this.patio_de_servicio = undefined
        this.elevador = undefined
        this.roof_garden_privado = undefined
        this.roof_garden_publico = undefined
        this.terraza = undefined
        this.estacionamiento = undefined
        this.precio_final = undefined
        this.fotos = undefined
        this.vendido = undefined
        this.fecha_vendido = undefined
        this.vendedor = undefined
        this.direccion = undefined
    }
}