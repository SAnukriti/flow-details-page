function insertMarkup(selector, value) {
    if (value) {
        document.querySelector(selector).insertAdjacentHTML('beforeend', `${value}`);
    } else {
        console.log(`Data missing for ${selector}`);
    }
}
function insertFilter(selector, value){
    if (value){
        console.log("Value: ", value)
        for (let i = 0; i < value.length; i++){
            document.querySelector(selector).insertAdjacentHTML('beforeend', `${value[i].sourceField.label} <span class="label">${value[i].operator.label}</span> ${value[i].valueToBeCompared}`);
        }
    } else {
        console.log(`Data missing for ${selector}`);
    }
}
function insertUniqueField(selector, value){
    if (value){
        console.log("Value: ", value)
        for (let i = 0; i < value.length; i++){
            document.querySelector(selector).insertAdjacentHTML('beforeend', `${value[i].label} `);
        }
    } else {
        console.log(`Data missing for ${selector}`);
    }
}
function insertResponseToSource(selector, value){
    if (value){
        console.log("Value: ", value)
        for (let i = 0; i < value.length; i++){
            document.querySelector(selector).insertAdjacentHTML('beforeend', `${value[i].to.value} ${value[i].from} `);
        }
    } else {
        console.log(`Data missing for ${selector}`);
    }
}
fetch('http://localhost:4000/api/v1/flow/get-flowdetails/01J7X1CXCV2QZV440TRDF57EN5')
    .then(res => res.json())
    .then(data => {
        insertMarkup('#flowType', data.type);
        insertMarkup('#firstExecution', data.startDate);
        insertMarkup('#nextExecution', data.endDate);
        insertMarkup('#createAt', data.created_time_field);
        insertMarkup('#modifiedAt', data.updated_time_field);
        insertFilter('#filters', data.filters);
        insertUniqueField('#uniqueField', data.unique_fields);
        insertResponseToSource('#responseToSource', data.response_field_mapping);
        insertResponseToSource('#responseToDestination', data.response_field_mapping);
    })
    .catch(error => console.log("Fetch Error:", error));