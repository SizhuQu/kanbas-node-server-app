import Database from "../Database/index.js";
export function enrollUserInCourse(userId, courseId) {
    const { enrollments } = Database;
    enrollments.push({ _id: Date.now(), user: userId, course: courseId });
    return enrollments;
}

export function findEnrollmentsForUser(userId) {
    const { enrollments } = Database;
    return enrollments.filter((enrollment) => enrollment.user === userId);
}

export function findEnrollmentsForCourse(courseId) {
    const { enrollments } = Database;
    return enrollments.filter((enrollment) => enrollment.course === courseId);
}

export function unenrollUserFromCourse(userId, courseId) {
    const { enrollments } = Database;
    Database.enrollments = enrollments.filter(
        (enrollment) => enrollment.user !== userId || enrollment.course !== courseId
    );
    return enrollments;
}

export function deleteEnrollmentsForCourse(courseId) {
    const { enrollments } = Database;
    Database.enrollments = enrollments.filter((enrollment) => enrollment.course !== courseId);
    return enrollments;
}

export function deleteEnrollmentsForUser(userId) {
    const { enrollments } = Database;
    Database.enrollments = enrollments.filter((enrollment) => enrollment.user !== userId);
    return enrollments;
}