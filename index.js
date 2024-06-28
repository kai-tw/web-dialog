class WebDialog {
    constructor(id) {
        const dialogNode = this.dialogNode = document.createElement("div");
        dialogNode.id = id;
        dialogNode.classList.add("web-dialog");
        document.body.appendChild(dialogNode);

        const contentNode = this.contentNode = document.createElement("div");
        contentNode.classList.add("content-node");
        dialogNode.appendChild(contentNode);

        const closeButton = this.closeButton = document.createElement("button");
        closeButton.classList.add("material-symbols-outlined", "close-button");
        closeButton.innerText = "close";
        closeButton.addEventListener("click", this.hide.bind(this));
        dialogNode.appendChild(closeButton);
    }

    show() {
        if (!this.dialogNode.classList.contains("show")) {
            this.dialogNode.classList.add("show");
        }
    }

    hide() {
        if (this.dialogNode.classList.contains("show")) {
            this.dialogNode.classList.remove("show");
        }
    }

    setInnerHTML(htmlString) {
        this.contentNode.innerHTML = htmlString;
    }
}