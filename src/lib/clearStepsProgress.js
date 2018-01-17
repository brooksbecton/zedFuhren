/**
 * Removes the saved progress of steps from
 * localStorgae
 */
export default function clearStepsProgress () {
    return new Promise((resolve, reject)=> {
        if (typeof Storage !== "undefined") {
          localStorage.removeItem("steps");
          resolve(); 
        } 
        else {
            reject(new Error("localStorage is not availible"));
        }
    })
};
