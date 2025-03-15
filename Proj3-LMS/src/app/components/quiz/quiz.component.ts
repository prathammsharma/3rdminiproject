import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms'; 
import { QuizService } from '../../services/quiz.service';

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [CommonModule, FormsModule], 
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  @Input() courseId: string = ''; 
  quizzes: any[] = [];
  userAnswers: any = {};

  constructor(private quizService: QuizService) {}

  ngOnInit(): void {
    if (this.courseId) {
      this.quizService.getQuizzes(this.courseId).subscribe((quizzes) => {
        this.quizzes = quizzes;
      });
    }
  }

  submitQuiz(): void {
    const userId = 'user123';
    this.quizService.submitQuizAnswers(userId, this.courseId, this.userAnswers).then(() => {
      alert('Quiz Submitted!');
    });
  }
}
