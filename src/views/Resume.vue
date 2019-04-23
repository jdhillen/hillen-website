<!--|== Template =============================================================================== -->
<template>
    <section class="resume" v-if='resume'>

        <article class="container contact">
            <div class="row">
                <div class="twelve columns">
                    <h1>Contact</h1>
                    <div class="contact--name">{{contact.name }}</div>
                    <div class="contact--title">{{contact.title }}</div>
                    <div class="contact--website">
                        <a :href="contact.website">{{contact.website}}</a>
                    </div>
                    <div class="contact--email">
                        <a :href="'mailto:' + contact.email" target="_blank">{{contact.email}}</a>
                    </div>
                    <div class="contact--phone">
                        <a :href="'tel:' + contact.phone">{{contact.phone}}</a>
                    </div>
                </div>
            </div>
        </article>

        <article class=" container about">
            <div class="row">
                <div class="twelve columns">
                    <h1>Intro</h1>
                    <div class="about--intro" v-html="about.intro"></div>
                </div>
            </div>
        </article>

        <article class="container skills">
            <div class="row">
                <div class="twelve columns">
                    <h1>Technical Skills</h1>
                    <div v-for="(title, index) in skills" :key="index">
                        <h3>{{index}}</h3>
                        <span v-for="(skill, index) in title" :key="index">{{skill.name}}, </span>
                    </div>
                </div>
            </div>
        </article>

        <article class="container education">
            <div class="row">
                <div class="twelve columns">
                    <h1>Education</h1>
                    <div class="row education">
                        <div class="two columns">
                            <img class="thumbnail education--photo" v-bind:src="education.school_photo" />
                        </div>
                        <div class="ten columns">
                            <div class="education--school">{{education.school}}</div>
                            <div class="education--degree">{{education.degree}}</div>
                            <div class="education--field_of_study">{{education.field_of_study}}</div>
                            <div class="education--gpa">{{education.gpa}}</div>
                            <div class="education--start">{{education.date_start}}</div>
                            <div class="education--end">{{education.date_end}}</div>
                            <div class="education--activities">{{education.activities}}</div>
                            <div class="education--description" v-html="education.description"></div>
                        </div>
                    </div>
                </div>
            </div>
        </article>

        <article class="container awards">
            <div class="row">
                <div class="twelve columns">
                    <h1>Awards</h1>
                    <div class="award" v-for="award in awards" :key="award.id">
                        <div class="award--name">{{award.name}}</div>
                        <div class="award--description">{{award.description}}</div>
                        <div class="award--year">{{award.year}}</div>
                    </div>
                </div>
            </div>
        </article>

        <article class="container experience">
            <div class="row">
                <div class="twelve columns">
                    <h1>Experience</h1>

                    <div class="row experience--job" v-for="job in jobs" :key="job.id">
                        <div class="two columns">
                            <img class="thumbnail" v-bind:src="job.photo" />
                        </div>
                        <div class="ten columns">
                            <h3>{{job.company}}</h3>
                            <div>{{job.title}}</div>
                            <div>{{job.date_start}} - {{job.date_end}}</div>
                            <div v-html="job.description"></div>
                        </div>
                    </div>

                </div>
            </div>
        </article>

        <article class="container references">
            <div class="row">
                <div class="twelve columns">
                    <h1>References</h1>
                    <div class="references--reference" v-for="reference in references"  :key="reference.id">
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
        </article>

    </section>
</template>


<!--|== Scripts ================================================================================ -->
<script>

import { mapState } from 'vuex';
import NProgress from 'nprogress';
import store from '@/assets/js/store';
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

    beforeRouteEnter(routeTo, routeFrom, next) {
        NProgress.start()
        store.dispatch('api/fetchResume').then(() => {
          NProgress.done() 
          next() // Only once this is called does the navigation continue
        })
    },

    beforeCreate() {

    },

    created() {
        this.sortResume();
    },

    beforeMount() {
        
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

    .contact,
    .about,
    .skills,
    .education,
    .awards,
    .experiences,
    .references {
        margin-bottom: 25px;

        h1 { font-family: 'Raleway Regular'; }
    }

    .contact {

    }

    .about {

    }

    .skills {

    }

    .education {

    }

    .awards {

    }

    .experience {

    }

    .references {

    }

}

</style>