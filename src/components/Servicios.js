import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Card } from 'bootstrap';

const Servicios=()=>{
    let copy
    let diccionario=[{hora: "7:00"},{hora: "8:00"},{hora: "9:00"}, {hora: "10:00"}, {hora: "11:00"}]
    const[pago, setPago]=useState("")
    const [state, setState]=useState(false)
    const[hora, setHora]=useState(0); 
    const[name, setName]=useState("")
    const[mail, setMail]=useState("")
    const[dia,setDia]=useState("")
    const[horas, setHoras]=useState(diccionario)

    const onChange=(e)=>{
        if(e.target.name=="name"){
            setName(e.target.value);
            console.log(e.target.value);
        }
        if(e.target.name=="mail"){
            setMail(e.target.value);
            console.log(e.target.value)
        }

    }
    const onSubmit=(e)=>{
        e.preventDefault();
        copy= horas
        copy = copy.filter(copy=>copy.hora!=hora)
        setHoras(copy)
        alert("Nombre: "+name+"\nCorreo electrónico: "+mail+"\nDia: "+dia+"\nHora: "+hora+"am"+"\nMétodo de Pago: Pago en  "+pago)
        setState(false)
    }

    return(
        <>
        {state==false? (
            <div className='row align-content-center align-items-center'>
                <div className="col-md-5 mb-5">
                    <div className="card">
                        <img
                            src='https://medlineplus.gov/images/BloodCountTests_Share.jpg'
                            alt="Analisis de Sangre"
                            className="card-img-top"
                        
                        />
                        <div className="card-body text-secondary">
                            <h1 className="text-dark">Análisis de Sangre</h1>
                            <p>Se solicita que el cliente venga en ayunas y con ropa cómoda</p>
                            <button  className={"btn btn-dark"} onClick={()=>setState(true)} name={"start"}>Seleccionar</button> 
                            
                        </div> 
                    </div>
            </div>
            <div className="col-md-5 mb-5">
                    <div className="card">
                        <img
                                src='https://como-funciona.co/wp-content/uploads/2022/04/Como-funciona-el-ultrasonido.jpg'
                                alt="Ultrasonido"
                                className="card-img-top"
                            
                            />
                        <div className="card-body text-secondary">
                            <h1 className="text-dark">Ultrasonido</h1>
                            <p>Se solicita que el cliente venga con un acompañante y ropa cómoda</p>
                            <button  className={"btn btn-dark"} onClick={()=>setState(true)} name={"start"}>Seleccionar</button> 
                        </div> 
                    </div>
            </div>
            <div className="col-md-5 mb-5">
                    <div className="card">
                        <div className={"img-square-wrapper"}>
                            <img
                                    src='https://www.webconsultas.com/sites/default/files/styles/rrss_wide/public/articulos/electrocardiograma_prueba.png'
                                    alt="reposo"
                                    className="card-img-top"
                                />
                        </div>
                    <div className="card-body text-secondary">
                        <h1 className="text-dark">Electrocardiograma en reposo</h1>
                        <p>Se solicita que el cliente venga con ropa cómoda</p>
                        <button  className={"btn btn-dark"} onClick={()=>setState(true)} name={"start"}>Seleccionar</button> 
                    </div> 
                </div>
        </div>
        <div className="col-md-5 mb-5">
                <div className="card">
                    <div className={"img-square-wrapper"}>
                        <img
                                src='https://www.sportlife.es/uploads/s1/10/97/88/21/prueba-de-esfuerzo-cua-l-hago-sin-ser-deportista-no-profesional.jpeg'
                                alt="esfuerzo"
                                className="card-img-top"
                            />
                    </div>
                    <div className="card-body text-secondary">
                        <h1 className="text-dark">Electrocardiograma en esfuerzo</h1>
                        <p>Se solicita que el cliente venga  con ropa cómoda</p>
                        <button className={"btn btn-dark"} onClick={()=>setState(true)} name={"start"}>Seleccionar</button> 
                    </div> 
                </div>
        </div>
    </div>
        ):(
                <form action={""} onSubmit={onSubmit}>
                    <div className='justify-content-start text-left'>
                        <div className="form-group text-white">
                            <label htmlFor="name"> Nombre: </label>
                            <input name={"name"}
                                onChange={onChange}
                                className="form-control" id="name"/>
                        </div>
                        <p/>
                        <div className="form-group text-white">
                            <label htmlFor="mail"> Correo electrónico: </label>
                            <input name={"mail"}
                                onChange={onChange}
                                className="form-control" id="mail"/>
                        </div>
                        <p/>
                        <div>
                        <h1>{dia}</h1>
                            <select value={dia}onChange={e=>setDia(e.target.value)}>
                                <option value="lunes">Lunes</option>
                                <option value="martes">Martes</option>
                                <option value="miercoles">Miércoles</option>
                                <option value="jueves">Jueves</option>
                                <option value="viernes">Viernes</option>
                                

                            </select>

                        </div>
                        <p/>
                        <div>
                            <select value={hora}onChange={e=>setHora(e.target.value)}>
                                {horas.map((hora)=>(
                                        <option value={hora.hora}>{hora.hora}</option>
                                ))}
                            </select>

                        </div>
                        <p/>
                        <div>
                            <select value={pago}onChange={e=>setPago(e.target.value)}>
                                <option value="lugar">Pago en establecimiento</option>
                                <option value="linea">Pago en línea</option>
                            </select>

                        </div>
                        <br/>
                        <div className="font-weight-bold form-group text-white">
                            <button className="btn btn-info btn-lg text-white" type="submit">
                                Terminar
                            </button>
                        </div>
                    </div>
                    </form>
        )}
        </>

    );
}
export default Servicios;