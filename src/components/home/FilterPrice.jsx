import React from 'react'

const FilterPrice = ({setFilterByPrice}) => {

    const HandleSubmit = e => {
        e.preventDefault()
        const from = +e.target.from.value
        const to = +e.target.to.value
        const obj = {
            from: from,
            to: to !== 0 ? to : Infinity        
        }
        setFilterByPrice(obj)
    }

  return (
    <form onSubmit={HandleSubmit}>
        <h3>Price</h3>
        <div>
            <label htmlFor="from">From</label>
            <input id ="from" type="text" />
        </div>
        <div>
            <label htmlFor="to">To</label>
            <input id ="to" type="text" />
        </div>
        <button>Filter</button>
    </form>
  )
}

export default FilterPrice