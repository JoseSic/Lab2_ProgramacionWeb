import { Injectable } from '@angular/core';
import axios from "axios";
import Axios, { AxiosInstance } from "axios";
import { ErrorHandler } from "@angular/core";
import { Imagen } from './imagen';
import { ToastServiceService } from './toast-service.service'
@Injectable({
  providedIn: 'root'
})
export class Datos2Service {

  url: string = "http://localhost:3000/api/v1/Galeria";
  private axiosClient: AxiosInstance;

  constructor() {
    this.axiosClient = axios.create({
      baseURL: "http://galeriaapp.eastus.azurecontainer.io:3000/api/v1/Galeria",
      timeout: 5000,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'content-type': 'application/json'
      },
    })
  }

  getAllGaleria() {
    const promise = new Promise((resolve, reject) => {
      let dictionary;
      dictionary = {};
      this.axiosClient.get('/')
        .then(function (response) {
          response.data.forEach(element => {
            dictionary[element._id] = element;
          });
          resolve(dictionary);
        })
        .catch(function (error) {
          reject(error.response.data.message);
        });
    });
    return promise;
  }

  addFoto(FotoGaleria) {

    const promise = new Promise((resolve, reject) => {
      this.axiosClient.post('/Dato', JSON.stringify(FotoGaleria))
        .then(function (response) {
          console.log(response);
          resolve("Datos ingresados éxitosamente!");
        })
        .catch(function (error) {
          console.log(error);
          reject("Ocurrio un error!");
        });
    });
    return promise;
  }

  removeFoto(Imagen: Imagen) {
    const promise = new Promise((resolve, reject) => {
      this.axiosClient.delete('/' + Imagen._id)
        .then(function (response) {
          console.log(response);
          resolve("Eliminado con exito!");
        })
        .catch(function (error) {
          console.log(error);
          reject("Error al eliminar el elemento!");
        });
    });
    return promise;
  }

  updateFoto(id: string, Foto) {

    const promise = new Promise((resolve, reject) => {

      this.axiosClient.put('/' + id, JSON.stringify(Foto))
        .then(function (response) {
          console.log(response);
          resolve("Actualizado con exito!");
        })
        .catch(function (error) {
          console.log(error);
          reject("Error al actualizar el elemento");
        });
    });
    return promise;
  }

  linkImage(data) {
    let body = new FormData();
    body.append('image', data);
    let dd;

   const promise = new Promise((resolve, reject) => {

      this.axiosClient.post('/Upload', body)
        .then(function (response) {
          resolve(response.data['imageURL']);
        })
        .catch(function (error) {
          console.log(error);
          reject("Ocurrio un error al subir la imagen!");
        });
    });
    return promise;
  }
}
