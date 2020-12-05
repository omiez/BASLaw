<template>
  <Common class="categories-wrapper" :sidebar="false">
    <h3>תחומיי עיסוק:</h3>
        <ModuleTransition>
      <ul v-show="recoShowModule" class="category-wrapper">
        <li
          class="category-item"
          :class="title == item.name ? 'active': ''"
          v-for="(item, index) in this.$categories.list"
          :key="index">
          <router-link :to="item.path">
            <span class="category-name">{{ getCategoryName(item.name) }}</span>
            <!-- <span class="post-num" :style="{ 'backgroundColor': getOneColor() }">{{ item.pages.length }}</span> -->
          </router-link>
        </li>
      </ul>
    </ModuleTransition>
    <div v-if="this.$currentCategories.key == 'commercial'">
      <h2>דיני תאגידים ומשפט מסחרי</h2>
      <p>
      משרדנו מתמקד במתן קשת רחבה של שירותים משפטיים מתמשכים בתחום המסחרי לחברות, שותפויות ועמותות.

ניסיוננו המעשי בתחום החברות נגזר מצרכיהם העסקיים של לקוחותינו. אנו משתמשים בניסיוננו הרחב והמשאבים העומדים לרשותנו על מנת לסייע ללקוחותינו בהשגת יעדיהם העסקיים.

תחומים עיסוק עיקריים בתחום דיני התאגידים ומשפט מסחרי:

ייעוץ וליווי שוטף של חברות בכל תחומי המשפט התאגידי בישראל.
חוזים מסחריים לרבות מיזוגים ורכישות, מכירת פעילות, הסכמי זכיונות, הסכמי הפצה ושיתופי פעולה עסקיים.
הקמת חברות בע"מ, שותפויות ועמותות תחת הדין הישראלי.
ליווי שוטף של חברות, עמותות ואגודות שיתופיות.
    </p>
    </div>
    <div v-if="this.$currentCategories.key == 'letegation'">
    <h2>ליטיגציה</h2>
    <p>
      משרדנו מתמחה בכל תחומי הליטיגציה בפני בתי המשפט ומוסדות הבוררות והגישור השונים בישראל.

למשרדנו ניסיון רב בתחומי המשפט האזרחי מסחרי, צווים זמניים, צווי מניעה, צווי הרחקה ,סעדים דחופים נוספים, תביעות ייצוגית, תביעות לשון הרע, תביעות בנושא קניין רוחני, הוצל"פ, עתירות מנהליות, מכרזים, משפט מנהלי, ושימועים מנהליים בפני רשויות המדינה השונות.
    </p>
    </div>
    <div v-if="this.$currentCategories.key == 'labour'">
    <h2>דיני עבודה</h2>
    <p>
      משרדנו מייצג לקוחות בשלל תחומים הנוגעים לדיני העבודה ובכלל זה: חוות דעת משפטיות, ייצוג מעבידים וייצוג עובדים בכל ההליכים השונים הקיימים בבתי הדין לעבודה, ייצוג בתביעות ייצוגיות בתחום דיני העבודה.

ביצוע פעולות הקשורות לדיני העבודה לרבות הכנת חוזי עבודה אישיים, הסכמים קיבוציים, מו"מ, ייעוץ וליווי משפטי שוטף, תביעות בתחום הטרדה מינית, הליכים פליליים ועוד.
    </p>
    </div>

    <div  v-if="this.$currentCategories.key == 'realestate'">
    <h2>נדל"ן</h2>
    <p>
      מחלקת הנדל"ן במשרד מייעצת ליזמים, לחברות נדל"ן, לפרטיים וכן לחברות אשר נזקקות לייעוץ וליווי משפטי בנושאים הקשורים לנדל"ן.

בין היתר, מטפלת מחלקת הנדל"ן של המשרד בנושאים שלהלן: ליווי משפטי של עסקאות מקרקעין על כל סוגיהן, עסקאות קומבינציה, פינוי בינוי, קבוצות רכישה, עסקאות מכר ורכישה, שכירות, רישום בית משותף, ליווי משפטי של יזמים בביצוע עסקאות נדל"ן בחו"ל, ייצוג לקוחות בפני מוסדות תכנון, ייצוג לקוחות בפני הטאבו, טיפול משפטי בנושאים הקשורים למנהל מקרקעי ישראל, ייצוג אגודות שיתופיות בענייני נדל"ן, טיפול בהפקעות ופיצוי בגין הפקעות, טיפול בתביעות לפי סעיף 197 לחוק התכנון והבניה.
    </p>
    </div>
    <div v-if="this.$currentCategories.key == 'hightech'">
      <h2>חברות סטארט-אפ וחברות היי-טק</h2>
      <p>
      משרדנו מתגאה במיוחד בחברות הסטארט-אפ שצמחו והתפתחו בהצלחה במקביל לעבודתם עם המשרד, והפכו מרעיון של יזם בודד לחברות גדולות ויציבות עם פעילות בינלאומית.

התמחותנו בתחום מתבססת על הבנת צרכי היזמים והחברה במהלך השלבים אותם היא עוברת במחזור חייה.

אנו עובדים יחדיו, יד ביד עם מייסדי החברה החל ממסמכי הקמת החברה והסכם בעלי המניות הראשון וזאת תוך סיוע למייסדים עם גיוס השקעות ראשוניות (בשלב ה Seed), הסכמי בטא, הסכמי העסקת עובדים, הכנת תכנית אופציות לעובדים, ליווי השקעה (Term sheet, הסכמי עסקה) עד לסגירתה, ניסוח הסכמי רישיונות, הסכמי הפצה, הסכמי מיזוגים ורכישות ועוד.

אנו מציעים לחברות סטארט-אפ בית חם ומזמין, בו אנו הופכים את צרכי הלקוח לצרכינו שלנו, דואגים לספק לו חליפת שירותים תפורה למידותיהן ואשר תספק את צרכיו המשפטיים והעסקיים.
    </p>
    </div>
    

    <!-- 分类集合 -->


    <!-- 博客列表 -->
    <ModuleTransition delay="0.08">
      <div>
            <h3>מהתקשורת:</h3>
            <note-abstract
        v-show="recoShowModule"
        class="list"
        :data="posts"
        :currentPage="currentPage"
        @currentTag="getCurrentTag"></note-abstract>
        </div>
    </ModuleTransition>

    <!-- 分页 -->
    <ModuleTransition delay="0.16">
      <pagation
        class="pagation"
        :total="posts.length"
        :currentPage="currentPage"
        @getCurrentPage="getCurrentPage"></pagation>
    </ModuleTransition>
  </Common>
</template>

<script>
import Common from '@theme/components/Common'
import NoteAbstract from '@theme/components/NoteAbstract'
import ModuleTransition from '@theme/components/ModuleTransition'
import pagination from '@theme/mixins/pagination'
import { sortPostsByStickyAndDate, filterPosts } from '@theme/helpers/postData'
import { getOneColor } from '@theme/helpers/other'
import moduleTransitonMixin from '@theme/mixins/moduleTransiton'

export default {
  mixins: [pagination, moduleTransitonMixin],
  components: { Common, NoteAbstract, ModuleTransition },

  data () {
    return {
      currentPage: 1
    }
  },

  computed: {
    // 时间降序后的博客列表
    posts () {
      let posts = this.$currentCategories.pages
      posts = filterPosts(posts)
      sortPostsByStickyAndDate(posts)
      return posts
    },
    // 标题只显示分类名称
    title () {
      return this.$currentCategories.key
    }
  },

  mounted () {
    this._setPage(this._getStoragePage())
  },

  methods: {
    // 获取当前tag
    getCurrentTag (tag) {
      this.$emit('currentTag', tag)
    },
    // 获取当前页码
    getCurrentPage (page) {
      this._setPage(page)
      setTimeout(() => {
        window.scrollTo(0, 0)
      }, 100)
    },
    _setPage (page) {
      this.currentPage = page
      this.$page.currentPage = page
      this._setStoragePage(page)
    },
    getOneColor,
    getCategoryName(category) {
      switch (category) {
        case "commercial":
          return 'דיני תאגידים ומשפט מסחרי';
        case "letegation":
          return 'ליטיגציה';
        case "labour":
          return 'דיני עבודה';
        case "realestate":
          return 'נדל"ן';
        case "hightech":
          return 'חברות סטארט-אפ וחברות היי-טק';     
      }
    }
  },

  watch: {
    $route () {
      this._setPage(this._getStoragePage())
    }
  }
}
</script>

<style src="@theme/styles/theme.styl" lang="stylus"></style>

<style lang="stylus" scoped>
@require '../../node_modules/vuepress-theme-reco/styles/mode.styl'
.categories-wrapper
  max-width: $contentWidth;
  margin: 0 auto;
  padding: 4.6rem 2.5rem 0;
  .category-wrapper {
    list-style none
    padding-left 0
    .category-item {
      vertical-align: middle;
      margin: 4px 8px 10px;
      display: inline-block;
      cursor: pointer;
      border-radius: $borderRadius
      font-size: 13px;
      box-shadow var(--box-shadow)
      transition: all .5s
      background-color var(--background-color)
      &:hover, &.active {
        background $accentColor
        a span.category-name {
          color #fff
          .post-num {
            color $accentColor
          }
        }
      }
      a {
        display flex
        box-sizing border-box
        width 100%
        height 100%
        padding: 8px 14px;
        justify-content: space-between
        align-items center
        color: #666
        .post-num {
          margin-left 4px
          width 1.2rem;
          height 1.2rem
          text-align center
          line-height 1.2rem
          border-radius $borderRadius
          font-size .7rem
          color #fff
        }
      }
    }
  }

@media (max-width: $MQMobile)
  .categories-wrapper
    padding: 4.6rem 1rem 0;
  .page-edit
    .edit-link
      margin-bottom .5rem
    .last-updated
      font-size .8em
      float none
      text-align left
</style>
