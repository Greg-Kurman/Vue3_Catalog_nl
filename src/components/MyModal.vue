
<template>
    <transition name="modal-fade">
        <div class="modal-backdrop">
            <div class="modal" role="dialog" aria-labelledby="modalTitle" aria-describedby="modalDescription">
                <header class="modal-header" id="modalTitle">
                    <slot name="header">
                        Выбор населенного пункта:

                        <button type="button" class="btn-close" @click="close" aria-label="Close modal">

                        </button>
                    </slot>
                </header>
                <section class="modal-body" id="modalDescription">
                    <slot name="body">
                        <input type="text" placeholder="Введите город" class="modal-input"/>
                    </slot>
                    <slot name="footer">
                        <button type="button" class="btn-apply" @click="close" aria-label="Close modal">
                            ПОДТВЕРДИТЬ
                        </button>
                    </slot>
                </section>
                <footer class="modal-footer">

                </footer>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    name: 'MyModal',
    methods: {
        close() {
            this.$emit('close');
        },
    },

};
</script>



<style>
.modal-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(41, 40, 40, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
}

.modal {
    position: relative;
    background: #FFFFFF;
    display: flex;
    flex-direction: column;
    Width: 769px;
    Height: 144px;
    border-radius: 5px;
}

.modal-header {

    margin: 28px 0 12px 19px;
    font-family: 'Futura PT demi';
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    color: #272727;
    display: flex;
}

.modal-input {
    Width: 540px;
    Height: 48px;
    margin: 0 18px 0 19px;
    border: 1px solid rgba(151, 151, 151, 0.5);
    border-radius: 5px;
}

.modal-footer {
    display: flex;
}

.modal-header {
    justify-content: space-between;
}

.modal-footer {
    justify-content: flex-end;
}

.modal-body {
    position: relative;
    font-family: 'Futura PT book';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 23px;
}

.btn-close {
    position: absolute;
    border: none;
    Width: 16px;
    Height: 16px;
    top: 18px;
    right: 18px;
    cursor: pointer;
    background: transparent;
    background-image: url(../assets/close.svg);
    background-repeat: no-repeat;
}

.btn-apply {
    cursor: pointer;
    Width: 174px;
    Height: 48px;
    border: 2px solid rgba(151, 151, 151, 0.3);
    border-radius: 24px;
    font-family: 'Futura PT book';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 21px;
    letter-spacing: 1.75px;
    color: #ACACAC;
    mix-blend-mode: normal;
    background-color: #FFFFFF;
}



.btn-apply:hover {

    box-shadow: 0px 12px 25px -10px #FF6F00;

}

.btn-apply:hover {
    background: linear-gradient(270deg, #FFA800 0%, #FF6F00 60.2%);
    border-radius: 24px;
    color: white;
    z-index: 10;

}
</style>