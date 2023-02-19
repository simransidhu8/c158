AFRAME.registerComponent("tour", {
    init: function(){
        this.placesContainer = this.el
        this.createCards()
    },

    createCards: function(){
        const thumbnailsRef = [
            {
                id: "taj-mahal",
                title: "Taj Mahal",
                url: "./assets/thumbnails/taj_mahal.png"
            },
            {
                id: "new-york-city",
                title: "New York City",
                url: "./assets/thumbnails/new_york_city.png"
            },
            {
                id: "eiffel-tower",
                title: "Eiffel Tower",
                url: "./assets/thumbnails/eiffel_tower.jpg"
            },
            {
                id: "budapest",
                title: "Budapest",
                url: "./assets/thumbnails/budapest.jpg"
            }
        ]

        let previousXPosition = -60

        for(var item of thumbnailsRef){
            const posX = previousXPosition + 25
            const posY = 5
            const posZ = -40
            const position = {x: posX, y: posY, z: posZ}

            previousXPosition = posX

            const borderEl = this.createBorder(position, item.id)

            const titleEl = this.createTitle(position, item)
            borderEl.appendChild(titleEl)

            const thumbnailsEl = this.createThumbnail(item)
            borderEl.appendChild(thumbnailsEl)

            this.placesContainer.appendChild(borderEl)
        }
    },

    createBorder: function(position, id){
        const entityEl = document.createElement("a-entity")
        entityEl.setAttribute("id", id)
        entityEl.setAttribute("visible", true)
        entityEl.setAttribute("geometry", {
            primitive: "ring", 
            radiusInner: 9, 
            radiusOuter: 10
        })
        entityEl.setAttribute("position", position)
        entityEl.setAttribute("material", {color: "red", opacity: 0.4})
        entityEl.setAttribute("cursor-listener", {})

        return entityEl
    },

    createThumbnail: function(item){
        const entityEl = document.createElement("a-entity")
        entityEl.setAttribute("visible", true)
        entityEl.setAttribute("geometry", {
            primitive: "circle", 
            radius: 9
        })
        entityEl.setAttribute("material", {src: item.url})

        return entityEl
    },

    createTitle: function(position, item){
        const entityEl = document.createElement("a-entity")
        entityEl.setAttribute("text", {
            font: "exo2bold", 
            align: "center", 
            width: 70, 
            value: item.title, 
            color: "#e65100"
        })
        const elPosition = position
        elPosition.y = -20
        entityEl.setAttribute("position", position)
        entityEl.setAttribute("visible", true)

        return entityEl
    }
})