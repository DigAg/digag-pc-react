/**
 * Created by Yuicon on 2017/6/27.
 */

export const SET_STATE = 'SET_STATE'

export const testAction = (data) => {
  return{
    type:SET_STATE,
    data,
  }
}
