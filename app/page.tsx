"use client";

import { motion } from "framer-motion";
import {
  BookOpenText,
  ChatsCircle,
  CloudSun,
  Notebook,
  Sparkle,
  StarAndCrescent
} from "@phosphor-icons/react";
import styles from "./page.module.css";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (index = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.12,
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1]
    }
  })
};

const readingPlan = [
  {
    day: "Понедельник",
    passage: "Псалом 27",
    reflection: "Впустите свет благодарения в начало недели: перечитайте стихи о доверии и ответьте на них собственной молитвой."
  },
  {
    day: "Среда",
    passage: "Матфея 5:1-12",
    reflection: "Внимательно прочтите каждое из блаженств. Какие перемены утренний покой приносит в ваш характер?"
  },
  {
    day: "Пятница",
    passage: "Исаия 60",
    reflection: "Представьте рассвет над городом, озарённым присутствием Бога. Запишите, чего ждёте от грядущих выходных."
  }
];

const anchors = [
  {
    icon: CloudSun,
    title: "Рассветные чтения",
    description: "Погружайтесь в Писание с первыми лучами света. Подборки текстов, вдохновляющие на мирный и настроенный день."
  },
  {
    icon: Notebook,
    title: "Тихие заметки",
    description: "Фокусируйте мысли и молитвы в мягком формате дневника. Структура помогает услышать глубину текста."
  },
  {
    icon: ChatsCircle,
    title: "Беседы у окна",
    description: "Короткие созерцательные размышления и вопросы для малых групп, ведших диалог в атмосфере принятия."
  }
];

const Home = () => (
  <main className={styles.page}>
    <section className={styles.hero}>
      <div className={styles.heroHalo} />
      <motion.div
        className={styles.heroContent}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      >
        <span className={styles.eyebrow}>
          <Sparkle size={22} weight="fill" />
          Утренний свет Писания
        </span>
        <div>
          <h1 className={styles.heroTitle}>
            Мир, свет и глубина
            <span className={styles.heroHighlight}>Писания</span>
          </h1>
          <p className={styles.heroDescription}>
            Пространство для тех, кто ищет духовный покой, ясность мысли и красоту Божьего слова. Здесь вы
            найдёте подборки чтений, музыкальные треки и созерцательные практики, наполненные мягким
            утренним сиянием.
          </p>
        </div>
        <div className={styles.heroActions}>
          <button className={styles.primaryButton} type="button">
            Начать утренний ритм
          </button>
          <button className={styles.secondaryButton} type="button">
            Послушать вдохновение
          </button>
        </div>
      </motion.div>
      <motion.div
        className={styles.heroScroll}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
      >
        пролистайте вниз
      </motion.div>
    </section>

    <section>
      <div className={styles.sectionHeader}>
        <motion.h2 className={styles.sectionTitle} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          Мягкие якоря дня
        </motion.h2>
        <motion.p
          className={styles.sectionSubtitle}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={1}
        >
          Сборник практик, созданный для медленного чтения, вдумчивых молитв и общения. Каждый блок —
          шаг в сторону света, который окутывает день золотистым спокойствием.
        </motion.p>
      </div>
      <div className={styles.cards}>
        {anchors.map(({ icon: Icon, title, description }, index) => (
          <motion.article
            key={title}
            className={styles.card}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={index}
          >
            <div className={styles.cardIcon}>
              <Icon size={28} weight="duotone" />
            </div>
            <h3 className={styles.cardTitle}>{title}</h3>
            <p className={styles.cardDescription}>{description}</p>
          </motion.article>
        ))}
      </div>
    </section>

    <section>
      <div className={styles.sectionHeader}>
        <motion.h2 className={styles.sectionTitle} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          Путеводитель рассвета
        </motion.h2>
        <motion.p
          className={styles.sectionSubtitle}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={1}
        >
          Нежная последовательность чтений и молитвы. Используйте её как индивидуальный маршрут или для
          утренних встреч в кругу друзей.
        </motion.p>
      </div>
      <div className={styles.readingPlan}>
        {readingPlan.map(({ day, passage, reflection }, index) => (
          <motion.article
            key={day}
            className={styles.readingCard}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={index}
          >
            <span className={styles.readingDay}>{day}</span>
            <h3 className={styles.readingPassage}>{passage}</h3>
            <p className={styles.readingReflection}>{reflection}</p>
          </motion.article>
        ))}
      </div>
    </section>

    <section>
      <motion.div
        className={styles.callout}
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <StarAndCrescent size={48} weight="duotone" color="var(--color-accent)" />
        <h2 className={styles.calloutTitle}>Присоединяйтесь к утреннему сообществу</h2>
        <p className={styles.calloutSubtitle}>
          Расписание живых эфиров, плейлисты и приглашения в тёплые беседы о Писании каждую неделю. Свет
          рассвета — на расстоянии одного нажатия.
        </p>
        <div className={styles.calloutActions}>
          <button className={styles.primaryButton} type="button">
            Получить приглашение
          </button>
          <button className={styles.secondaryButton} type="button">
            Смотреть расписание
          </button>
        </div>
      </motion.div>
    </section>

    <footer className={styles.footer}>
      <div className={styles.divider} />
      <BookOpenText size={22} weight="duotone" />
      <span>Lua Aurora</span>
      <p>© {new Date().getFullYear()} – пространство мира, света и глубины Писания.</p>
    </footer>
  </main>
);

export default Home;
