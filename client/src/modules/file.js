import axios from 'axios';
import { handleActions } from 'redux-actions';
import { URL_GETFILE } from '../util/config';

const GET_FILE_PENDING = 'GET_FILE_PENDING';
const GET_FILE_FUFILLED = 'GET_FILE_FUFILLED';
const GET_FILE_REJECTED = 'GET_FILE_REJECTED';

// const getFileAPI = userInfo => {
//   return axios.get(URL_GETFILE, userInfo);
// };
//
// const updateFileAPI = (userInfo,fileInfo) {
//   return axios.get("..", userInfo);
// };

const getFileAPI = userInfo =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        {
          name: 'File_A',
          size: 234,
          downloaded: 23,
          complete: false,
          hash: 'ASCCSDFA@#$!!',
          dir: false
        },
        {
          name: 'File_B',
          size: 2340,
          downloaded: 2340,
          complete: true,
          hash: '2342SF#G#@!@4',
          dir: false
        },
        {
          name: 'Folder_A',
          size: -1,
          downloaded: -1,
          complete: true,
          hash: '@SSD#@@SDAF',
          dir: true
        }
      ]);
    }, 1000);
  });

const updateFileAPI = (userInfo, fileInfo) =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve({
        name: 'File_A',
        size: 234,
        downloaded: 103,
        complete: false,
        hash: 'ASCCSDFA@#$!!'
      });
    }, 1000);
  });

export const getFileList = userInfo => dispatch => {
  dispatch({ type: GET_FILE_PENDING });
  return getFileAPI(userInfo)
    .then(response => {
      // find
      dispatch({
        type: GET_FILE_FUFILLED,
        payload: response
      });
    })
    .catch(error => {
      dispatch({
        type: GET_FILE_REJECTED
      });
    });
};

export const updateFileList = (userInfo, fileInfo) => dispatch =>
  updateFileList(userInfo, fileInfo)
    .then(response => {
      dispatch({
        type: GET_FILE_FUFILLED,
        payload: response
      });
    })
    .catch(error => {
      dispatch({
        type: GET_FILE_REJECTED
      });
    });

const initialState = {
  initialized: false,
  error: false,
  files: []
};

export default handleActions(
  {
    [GET_FILE_PENDING]: (state, action) => ({
      ...state,
      initialized: false,
      error: false
    }),

    [GET_FILE_FUFILLED]: (state, action) => ({
      ...state,
      initialized: true,
      error: false,
      files: action.payload
    }),

    [GET_FILE_REJECTED]: (state, action) => ({
      ...state,
      error: true
    })
  },
  initialState
);
