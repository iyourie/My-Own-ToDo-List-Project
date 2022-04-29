const one = document.querySelectorAll('input')[0]

let mspan = document.createElement('span');
let two = mspan.appendChild(document.createTextNode(`current tasks: ${document.querySelectorAll('div').length}`))
document.querySelector('main').appendChild(two)


let ap = document.createElement('p');
let three = ap.appendChild(document.createTextNode(`completed tasks: ${document.querySelector('aside').children.length - 1}`))
document.querySelector('aside').appendChild(three)



document.querySelectorAll('input')[1].onclick = function (e) {

    e.preventDefault()

    let fi = document.createElement('div');
    let se = document.createElement('button')
    let see = document.createElement('button')
    let seee = document.createElement('button')

    let fit = document.createTextNode(one.value);
    let set = document.createTextNode('d')
    let sett = document.createTextNode('c')
    let seett = document.createTextNode('e')

    se.setAttribute('class', 'button')
    see.setAttribute('class', 'button')
    fi.setAttribute('class', 'div')
    seee.setAttribute('class', 'button')
    document.querySelector('main').setAttribute('class', 'main')

    fi.appendChild(fit)
    se.appendChild(set)
    see.appendChild(sett)
    seee.appendChild(seett)
    two.textContent = `curren tasks: ${(document.querySelectorAll('div').length + 2) - document.querySelector('aside').children.length}`

    document.body.appendChild(fi)
    document.body.appendChild(se)
    document.body.appendChild(see)
    document.body.appendChild(seee)

    document.querySelector('main').appendChild(fi)
    document.querySelector('main').appendChild(se)
    document.querySelector('main').appendChild(see)
    document.querySelector('main').appendChild(seee)


    se.addEventListener('click', function () {
        fi.remove()
        se.remove()
        see.remove()
        seee.remove()
        two.textContent = `curren tasks: ${document.querySelectorAll('div').length - (document.querySelector('aside').children.length - 1)}`
    })

    see.addEventListener('click', function () {
        document.querySelector('main').removeChild(fi)
        document.querySelector('aside').appendChild(fi)
        document.querySelector('aside').classList.add('hello')
        se.remove()
        see.remove()
        seee.remove()
        if (document.querySelector('aside').classList.contains('hello')) {
            three.textContent = `completed tasks: ${document.querySelector('aside').children.length - 1}`
        }
        two.textContent = `curren tasks: ${(document.querySelectorAll('div').length + 1) - document.querySelector('aside').children.length}`;
    })

    seee.addEventListener('click', function () {
        let hi = prompt('edit your task')
        fi.textContent = hi
    })
    two.textContent = `curren tasks: ${(document.querySelectorAll('div').length + 1) - document.querySelector('aside').children.length}`;

    one.value = ''
}





