<!--|== Template =============================================================================== -->
<template>
    <section class="page resume">

        <div class="grid-container">
            <div class="resume__contact grid-x">
                <div class="cell">
                    <h1>Contact</h1>
                    <div class="resume__contact--name">{{contact.name }}</div>
                    <div class="resume__contact--title">{{contact.title }}</div>
                    <div class="resume__contact--website">
                        <a :href="contact.website">{{contact.website}}</a>
                    </div>
                    <div class="resume__contact--email">
                        <a :href="'mailto:' + contact.email" target="_blank">{{contact.email}}</a>
                    </div>
                    <div class="resume__contact--phone">
                        <a :href="'tel:' + contact.phone">{{contact.phone}}</a>
                    </div>
                </div>
            </div>

            <div class="resume__about">
                <div class="grid-x">
                    <div class="cell">
                        <h1>Intro</h1>
                        <div class="resume__about--intro" v-html="about.intro"></div>
                    </div>
                </div>
            </div>

            <div class="resume__skills">
                <div class="grid-x">
                    <div class="cell">
                        <h1>Technical Skills</h1>
                        <div v-for="(title, index) in skills">
                            <h3>{{index}}</h3>
                            <span v-for="skill in title">{{skill.name}}, </span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="resume__education">
                <div class="grid-x">
                    <div class="cell">
                        <h1>Education</h1>
                        <div class="resume__education--photo">
                            <img v-bind:src="education.school_photo" />
                        </div>
                        <div class="resume__education--school">{{education.school}}</div>
                        <div class="resume__education--degree">{{education.degree}}</div>
                        <div class="resume__education--field_of_study">{{education.field_of_study}}</div>
                        <div class="resume__education--gpa">{{education.gpa}}</div>
                        <div class="resume__education--start">{{education.date_start}}</div>
                        <div class="resume__education--end">{{education.date_end}}</div>
                        <div class="resume__education--activities">{{education.activities}}</div>
                        <div class="resume__education--description" v-html="education.description"></div>
                    </div>
                </div>
            </div>

            <div class="resume__awards">
                <div class="grid-x">
                    <div class="cell">
                        <h1>Awards</h1>
                        <div class="resume__awards--award" v-for="award in awards">{{award.name}} - {{award.description}} - {{award.year}}</div>
                    </div>
                </div>
            </div>

            <div class="resume__experience">
                <div class="grid-x">
                    <div class="cell">
                        <h1>Experience</h1>
                        <div class="resume__experience--job" v-for="job in jobs">
                            <div class="resume__experience--photo">
                                <img v-bind:src="job.photo" />
                            </div>
                            <h3>{{job.company}}</h3>
                            <div>{{job.title}}</div>
                            <div>{{job.date_start}} - {{job.date_end}}</div>
                            <div v-html="job.description"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="resume__references">
                <div class="grid-x">
                    <div class="cell">
                        <h1>References</h1>
                        <div class="resume__references--reference" v-for="reference in references">
                            <h3>{{reference.first_name}} {{reference.last_name}}</h3>
                            <div>{{reference.title}}</div>
                            <div>{{reference.company}}</div>
                            <div>
                                <a :href="'mailto:' + reference.email" target="_blank">{{reference.email}}</a>
                            </div>
                            <div>
                                <a :href="'tel:' + reference.phone">{{reference.phone}}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </section>
</template>


<!--|== Scripts ================================================================================ -->
<script>

import { mapState } from 'vuex';
import _ from 'underscore';

export default {
    name: 'resume-page',

    components: {

    },

    data() {
        return {
            contact: [],
            about: [],
            skills: [],
            education: [],
            awards: [],
            jobs: [],
            references: [],
        };
    },

    beforeCreate() {
        
    },

    created() {

    },

    beforeMount() {
        this.$store.dispatch('getResume')
            .then( () => {
                this.sortResume();
            });
    },

    mounted() {
        
    },

    beforeUpdate() {

    },

    updated() {
        
    },

    beforeDestroy() {
        
    },

    destroyed() {

    },

    computed: {

        ...mapState({
            resume: state => state.api.resume,
        }),

        

    },

    methods: {

        sortResume: function() {
            this.contact = this.resume['Contact'][0];
            this.about = this.resume['About'][0];
            this.skills = _.groupBy(this.resume['Skill'], 'skill_type');
            this.education = this.resume['Education'][0];
            this.awards = this.resume['Award'];
            this.jobs = this.resume['Job'];
            this.references = this.resume['Reference'];
        },

    },

    watch: {
        
    }
};
</script>


<!--|== CSS ==================================================================================== -->
<style lang="scss">

.resume {
    
    h1 {
        font-family: 'Raleway Regular';
    }
}

</style>