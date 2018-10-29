import { Injectable } from '@angular/core';
import axios from "axios";
import Axios, { AxiosInstance } from "axios";
import { ErrorHandler } from "@angular/core";
import {Imagen} from './imagen';
@Injectable({
  providedIn: 'root'
})
export class Datos2Service {

  url: string = "http://localhost:3000/api/v1/Galeria";
  private axiosClient: AxiosInstance;

  constructor() {
    this.axiosClient = axios.create({
      baseURL: "http://localhost:3000/api/v1/Galeria",
      timeout: 1000,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      },
    })
  }

  getAllGaleria () {
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

  addFoto (FotoGaleria): void {
    this.axiosClient.post('/Dato', JSON.stringify(FotoGaleria))
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error.response.data.message);
    });
  }

  removeFoto (Imagen: Imagen) {
    const promise = new Promise((resolve, reject) => {
      this.axiosClient.delete('/' + Imagen._id)
      .then(function (response) {
        console.log(response);
        resolve(response);
      })
      .catch(function (error) {
        reject(error.response.data.message);
      });
    });
    return promise;
  }

  updateFoto (id: string, Foto) {

    const promise = new Promise((resolve, reject) => {

      this.axiosClient.put('/' + id, JSON.stringify(Foto))
      .then(function (response) {
        resolve(response);
      })
      .catch(function (error) {
        reject(error.response.data.message);
      });
    });
    return promise;
  }
}