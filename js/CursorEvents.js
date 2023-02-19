AFRAME.registerComponent("cursor-listener", {
    schema: {
        selectedItemId: {default: '', type: 'string'}
    },

    init: function(){
        this.handleMouseEnterEvents()
        this.handleMouseLeaveEvents()
    },

    handlePlacesListState: function(){
        const id= this.el.getAttribute("id")
        const placesId = ["taj-mahal", "new-york-city", "eiffel-tower", "budapest"]

        if(placesId.includes(id)){
            const placesContainer = document.querySelector("#places-container")
            placesContainer.setAttribute('cursor-listener', {selectedItemId: id})
            this.el.setAttribute('material', {
                color: 'blue',
                opacity: 1
            })
        }
    },

    handleMouseEnterEvents: function(){
        this.el.addEventListener('mouseEnter', () =>{
            this.handlePlacesListState()
        })
    },

    handleMouseLeaveEvents: function(){
        this.el.addEventListener("mouseLeave", () => {
            const {selectedItemId} = this.data 
            if(selectedItemId){
                const el = document.querySelector(`#${selectedItemId}`)
                const id = el.getAttribute("id")

                if(id == selectedItemId){
                    el.setAttribute("material", {color: 'red', opacity: 1})
                }
            } 
        })
    }
})