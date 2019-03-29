<!--|== Template =============================================================================== -->
<template>
    <section class="page resume">

        <article class="grid-container contact">
            <div class="gird-x">
                <div class="cell">
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

        <article class=" grid-container about">
            <div class="grid-x">
                <div class="cell">
                    <h1>Intro</h1>
                    <div class="about--intro" v-html="about.intro"></div>
                </div>
            </div>
        </article>

        <article class="grid-container skills">
            <div class="grid-x">
                <div class="cell">
                    <h1>Technical Skills</h1>
                    <div v-for="(title, index) in skills" :key="index">
                        <h3>{{index}}</h3>
                        <span v-for="(skill, index) in title" :key="index">{{skill.name}}, </span>
                    </div>
                </div>
            </div>
        </article>

        <article class="grid-container education">
            <div class="grid-x">
                <div class="cell">
                    <h1>Education</h1>
                    <div class="grid-x education">
                        <div class="cell small-2 medium-2">
                            <img class="thumbnail education--photo" v-bind:src="education.school_photo" />
                        </div>
                        <div class="cell small-12 medium-9">
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

        <article class="grid-container awards">
            <div class="grid-x">
                <div class="cell">
                    <h1>Awards</h1>
                    <div class="award" v-for="award in awards" :key="award.id">
                        <div class="award--name">{{award.name}}</div>
                        <div class="award--description">{{award.description}}</div>
                        <div class="award--year">{{award.year}}</div>
                    </div>
                </div>
            </div>
        </article>

        <article class="grid-container experience">
            <div class="grid-x">
                <div class="cell">
                    <h1>Experience</h1>

                    <div class="grid-x experience--job" v-for="job in jobs" :key="job.id">
                        <div class="cell small-2 medium-2">
                            <img class="thumbnail" v-bind:src="job.photo" />
                        </div>
                        <div class="cell small-12 medium-9">
                            <h3>{{job.company}}</h3>
                            <div>{{job.title}}</div>
                            <div>{{job.date_start}} - {{job.date_end}}</div>
                            <div v-html="job.description"></div>
                        </div>
                    </div>

                </div>
            </div>
        </article>

        <article class="grid-container references">
            <div class="grid-x">
                <div class="cell">
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
        this.$store.dispatch('getResume')
            .then( () => {
                this.sortResume();
            });
    },

    created() {

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