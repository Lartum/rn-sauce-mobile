import axios from 'axios';
import {dataURItoBlob} from '../utils/services';

export async function uploadToMoe(image) {
  var formData = new FormData();
  formData.append('image', image);
  try {
    return await axios.post('https://trace.moe/api/search', formData, {
      'Content-Type': 'multipart/form-data',
    });
  } catch (error) {
    return error.response;
  }
}
