<template>
    <carousel>
        <splide-slide v-for="(preview, filename) in previews" :key="filename">
            <img :src="preview">
            <span class="remove" @click="removePreview(filename)"><i class="nf nf-md-delete_forever"></i></span>
        </splide-slide>
        <splide-slide v-for="(image, i) in currentImages" :key="i">
            <img :src="image" :alt="image">
            <div class="remove" @click="removeImage(i)"><i class="nf nf-md-delete_forever"></i></div>
        </splide-slide>
    </carousel>
    <div class="container">
        <div class="upload-container">
            <label for="choose-image"><i class="nf nf-fa-circle_plus"></i> New Image</label>
            <input id="choose-image" type="file" name="choose-image" @change="onSelectFile" accept="image/*" title="Add Images" multiple>
        </div>
    </div>
</template>

<script>
import { SplideSlide } from '@splidejs/vue-splide';
import Carousel from './Carousel.vue';

export default {
    name: "ImagePicker",
    components: {
        SplideSlide,
        Carousel
    },
    props: {
        oldImages: {
            type: Array,
            required: false
        }
    },
    data() {
        return {
            removedImages: [],
            newImages: [],
            currentImages: [],
            previews: {}
        }
    },
    watch: {
        oldImages(val) {
            this.currentImages = val;
        }
    },
    methods: {
        onSelectFile(e) {
            for(const file of e.target.files) {
                let reader = new FileReader();
                reader.onload = (e) => {
                    this.previews[file.name] = e.target.result;
                };
                reader.readAsDataURL(file);

                this.newImages.push(file);
            }
        },
        removeImage(i) {
            const removedImage = this.currentImages.splice(i, 1)[0];
            this.removedImages.push(removedImage);
        },
        removePreview(filename) {
            delete this.previews[filename];
            this.newImages = this.newImages.filter(e => e.name !== filename);
        },
        getNewImageFormData() {
            const formData = new FormData();
            for(const image of this.newImages) {
                formData.append('pictures[]', image);
            }
            return formData;
        }
    }
}
</script>

<style>
.upload-container {
    width: 20em;
    height: 4em;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: .5em;
    background-color: var(--color-background-mute);
}
.upload-container label {
    position: absolute;
    text-align: center;
    display: flex;
    align-items: center;
    gap: .5em;
}
.upload-container label i {
    font-size: 2em;
    height: 100%;
}
input[type="file" i] {
    position: absolute;
    inset: 0;
    z-index: 2;
    opacity: 0;
    cursor: pointer;
}
.upload-container:hover {
    background-color: var(--color-background-soft);
}
.remove {
    color: var(--color-warning);
    position: absolute;
    top: .1em;
    right: .25em;
    font-size: 1.2em;
    line-height: 1.2em;
    cursor: pointer;
}
.remove:hover {
    color: var(--color-warning-hover);
    text-shadow: 0 0 .3em var(--color-background);
}
#main-splide .remove {
    
    position: absolute;
    top: .5em;
    right: .5em;
    font-size: 3em;
    line-height: 1em;
}
#thumbnail-splide .splide__slide {
    opacity: 1;
}
.container {
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 1em;
}
</style>